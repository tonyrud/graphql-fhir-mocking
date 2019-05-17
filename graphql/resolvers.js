const { GraphQLDateTime: DateTime } = require('graphql-iso-date');

const parseDate = require('../utils/parseDate');

const resolvers = {
    DateTime,
    Patient: {
        lastUpdated: ({ lastUpdated }, { parsed }) =>
            parsed ? parseDate(lastUpdated, parsed) : lastUpdated,
    },
    Name: {
        full: patientData => {
            console.log('patientData', patientData);
            const { first, last, suffix } = patientData;
            return `${first} ${last}${suffix ? ' ' + suffix : ''}`;
        },
    },
    Query: {
        patient: (_, args, { dataSources }) =>
            dataSources.fhirAPI.getPatient({ id: args.id }),
        patients: (_, __, { dataSources }) => dataSources.fhirAPI.getPatients(),
    },
};

module.exports = resolvers;
