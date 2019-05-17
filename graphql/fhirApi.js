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
        return this.constructor.patientMapper(parsed);
    }

    async getPatients() {
        const data = await this.get('Patient', this.queryParams);
        const parsed = JSON.parse(data);
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
        } = patientResource;

        const findNumber = key => {
            const hasPatientNumber =
                telecom && telecom.find(number => number.use === key);

            return hasPatientNumber && hasPatientNumber.value;
        };

        const workPhone = findNumber('work') || 'No business phone';
        const homePhone = findNumber('home') || 'No home phone';

        return {
            id,
            name: {
                last: name && name[0].family,
                first: name && name[0].given[0],
                suffix: name && name[0].suffix && name[0].suffix[0],
            },
            phone: {
                work: workPhone,
                home: homePhone,
            },
            gender,
            lastUpdated,
        };
    }
}

module.exports = fhirApi;
