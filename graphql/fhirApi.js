const { RESTDataSource } = require('apollo-datasource-rest');

class fhirApi extends RESTDataSource {
    baseURL = 'http://test.fhir.org/r4/';
    queryParams = {
        _format: 'json',
        _pretty: true,
    };

    async getPatient({ id }) {
        const data = await this.get(`Patient/${id}`, this.queryParams);
        const parsed = JSON.parse(data);
        return this.patientMapper(parsed);
    }

    async getPractitioner({ practitionerId }) {
        const data = await this.get(practitionerId, this.queryParams);
        const { id, name, qualification } = JSON.parse(data);

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
        const data = await this.get('Patient', this.queryParams);
        const parsed = JSON.parse(data);
        return parsed.entry.map(this.patientMapper);
    }

    patientMapper(patient) {
        const patientResource = patient.resource ? patient.resource : patient;
        const {
            id,
            gender,
            meta: { lastUpdated },
            name,
            telecom,
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
        const homePhone = findNumber('home') || 'No home phone';

        return {
            id,
            practitionerId,
            name: this.nameMapper(name),
            phone: {
                work: workPhone,
                home: homePhone,
            },
            gender,
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
