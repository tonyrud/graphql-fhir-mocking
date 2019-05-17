const { GraphQLDateTime: DateTime } = require('graphql-iso-date');
const moment = require('moment');
const parseDate = require('../utils/parseDate');

const resolvers = {
    DateTime,
    Patient: {
        lastUpdated: ({ lastUpdated }, { parsed }) =>
            parsed ? parseDate(lastUpdated, parsed) : lastUpdated,
        practitioner: ({ practitionerId }, args, { dataSources }) => {
            return dataSources.fhirAPI.getPractitioner({
                practitionerId,
            });
        },
    },
    Name: {
        full: (patientData, { reverse }) => {
            const { first, last, suffix } = patientData;

            if (reverse) {
                return `${last}, ${first}`;
            }

            return `${first} ${last}${suffix ? ' ' + suffix : ''}`;
        },
    },
    Education: {
        graduationDate: ({ graduationDate }, { count }) => {
            const now = new Date();
            if (count === 'AS_YEARS') {
                return now.getFullYear() - +graduationDate;
            } else if (count === 'AS_DAYS') {
                var start = moment();
                var end = moment('1995');
                return start.diff(end, 'days');
            }
            return graduationDate;
        },
    },
    Query: {
        patient: (_, args, { dataSources }) =>
            dataSources.fhirAPI.getPatient({ id: args.id }),
        patients: (_, __, { dataSources }) => dataSources.fhirAPI.getPatients(),
    },
};

module.exports = resolvers;
