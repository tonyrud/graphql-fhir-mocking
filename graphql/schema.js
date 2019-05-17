const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar DateTime

    enum DateParsing {
        STRING
        COUNT
    }

    type Patient {
        id: ID!
        name: Name
        gender: String
        birthDate: DateTime
        phone: Phone
        lastUpdated(parsed: DateParsing): String!
    }

    type Name {
        first: String
        last: String
        full: String
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
