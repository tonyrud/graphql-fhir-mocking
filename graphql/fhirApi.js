const { RESTDataSource } = require('apollo-datasource-rest');
const mockPatient = require('../mocks/mockPatient');
const mockPatients = require('../mocks/mockPatients');
const mockPractitioner = require('../mocks/mockPractitioner');

const realData = false;
class fhirApi extends RESTDataSource {
    baseURL = 'http://test.fhir.org/r4/';
    queryParams = {
        _format: 'json',
        _pretty: true,
    };

    async getPatient({ id }) {
        let parsed = mockPatient;
        if (realData) {
            console.log('using real patient data');
            const data = await this.get(`Patient/${id}`, this.queryParams);
            parsed = JSON.parse(data);
        }
        return this.constructor.patientMapper(parsed);
    }

    async getPractitioner({ practitionerId }) {
        let data = mockPractitioner;
        if (!practitionerId) {
            return {
                name: {},
            };
        }

        if (realData) {
            console.log('using real practitioner data');
            data = await this.get(practitionerId, this.queryParams);
            data = JSON.parse(data);
        }

        const { id, name, qualification } = data;

        const degree = qualification && qualification[0].code.text;
        const graduationDate = qualification && qualification[0].period.start;
        const university = qualification && qualification[0].issuer.display;

        return {
            id,
            name: this.nameMapper(name),
            education: {
                degree,
                graduationDate,
                university,
            },
        };
    }

    async getPatients() {
        let parsed = mockPatients;
        if (realData) {
            console.log('using real patients data');
            const data = await this.get('Patient', this.queryParams);
            parsed = JSON.parse(data);
        }

        return parsed.entry.map(this.constructor.patientMapper);
    }

    static patientMapper(patient) {
        const patientResource = patient.resource ? patient.resource : patient;
        const {
            id,
            gender,
            meta: { lastUpdated },
            name,
            telecom,
            birthDate,
            generalPractitioner,
        } = patientResource;

        const findNumber = key => {
            const hasPatientNumber =
                telecom && telecom.find(number => number.use === key);

            return hasPatientNumber && hasPatientNumber.value;
        };

        const practitionerId =
            generalPractitioner && generalPractitioner[0].reference;

        const workPhone = findNumber('work') || 'No business phone';
        const homePhone = findNumber('home') || 'N/A';
        const genderCheck = gender || 'unknown';

        return {
            id,
            practitionerId,
            name: {
                last: name && name[0].family,
                first: name && name[0].given[0],
                suffix: name && name[0].suffix && name[0].suffix[0],
            },
            phone: {
                work: workPhone,
                home: homePhone,
            },
            gender: genderCheck,
            birthDate,
            lastUpdated,
        };
    }

    nameMapper(name) {
        return {
            last: name && name[0].family,
            first: name && name[0].given[0],
            suffix: name && name[0].suffix && name[0].suffix[0],
        };
    }
}

module.exports = fhirApi;
