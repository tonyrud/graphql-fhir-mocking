const koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const playground = require('./graphql/playground');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const fhirAPI = require('./graphql/fhirApi');
const ParseDateDirective = require('./graphql/dateParseDirective');
const corsOptions = { credentials: true };

const app = new koa();

const PORT = 3001;

const server = new ApolloServer({
    context: ({ ctx }) => ctx,
    tracing: true,
    playground,
    resolvers,
    typeDefs,
    dataSources: () => ({
        fhirAPI: new fhirAPI(),
    }),
    schemaDirectives: {
        parseDate: ParseDateDirective,
    },
});

server.applyMiddleware({
    app,
    cors: corsOptions,
});

app.listen(PORT, () =>
    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
);
