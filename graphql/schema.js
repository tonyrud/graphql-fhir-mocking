const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar DateTime
    directive @upper on FIELD_DEFINITION

    enum DateStringParsing {
        STRING
        COUNT
    }

    enum DateCount {
        AS_YEARS
        AS_DAYS
    }

    type Patient {
        id: ID!
        name: Name
        gender: String
        birthDate: String
        phone: Phone
        lastUpdated(parsed: DateStringParsing): String!
        practitioner: Practitioner
    }

    type Practitioner {
        id: ID!
        name: Name
        education: Education
    }

    type Education {
        degree: String
        graduationDate(count: DateCount): String
        university: String
    }

    type Name {
        first: String
        last: String
        full(reverse: Boolean): String
        given: String @deprecated(reason: "changed to 'last'")
    }

    type Phone {
        work: String!
        home: String!
    }

    type Subscription {
        patientAdded: Patient
    }

    type Query {
        """
        Get a patient by id
        """
        patient(id: String): Patient!
        """
        Get all patients
        """
        patients: [Patient]!
    }

    type Mutation {
        addPatient(patientName: String!): Patient
        changePatientName(patientName: String!): Patient
    }
`;

module.exports = typeDefs;
