const koa = require('koa');
const { defaultFieldResolver } = require('graphql');
require('dotenv').config();

// const uppercaseDirective = require('graphql-directive-uppercase');
const { ApolloServer, SchemaDirectiveVisitor } = require('apollo-server-koa');
const playground = require('./graphql/playground');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const fhirAPI = require('./graphql/fhirApi');
const corsOptions = { credentials: true };

const app = new koa();
const PORT = 3001;

class UpperCaseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function(...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === 'string') {
                return result.toUpperCase();
            }
            return result;
        };
    }
}

const server = new ApolloServer({
    context: ({ ctx }) => ctx,
    tracing: true,
    introspection: true,
    playground,
    resolvers,
    typeDefs,
    subscriptions: true,
    dataSources: () => ({
        fhirAPI: new fhirAPI(),
    }),
    engine: {
        apiKey: process.env.ENGINE_API_KEY,
    },
    schemaDirectives: {
        upper: UpperCaseDirective,
    },
});

server.applyMiddleware({
    app,
    cors: corsOptions,
});

const httpServer = app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

server.installSubscriptionHandlers(httpServer);
