const { SchemaDirectiveVisitor } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

class DateParseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        // console.log('directive field', field);
        // const { resolve = defaultFieldResolver } = field;
        // field.resolve = async function(...args) {
        //     const result = await resolve.apply(this, args);
        //     if (typeof result === 'string') {
        //         return result.toUpperCase();
        //     }
        //     return result;
        // };
    }
}

module.exports = DateParseDirective;
