const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar DateTime

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
        birthDate: DateTime
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
        work: String
        home: String
    }

    type Query {
        """
        Get a patient by id
        """
        patient(id: String!): Patient!
        """
        Get all patients
        """
        patients: [Patient]!
    }
`;

module.exports = typeDefs;
