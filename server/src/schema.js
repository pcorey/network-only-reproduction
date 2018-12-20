// Welcome to Launchpad!
// Log in to edit and save pads, run queries in GraphiQL on the right.
// Click "Download" above to get a zip with a standalone Node.js server.
// See docs and examples at https://github.com/apollographql/awesome-launchpad

// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from "graphql-tools";

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Random {
    id: Int!
    value: Float!
  }
  type Query {
    random: Random!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    random: (root, args, context) => {
      return { id: 1337, value: Math.random() };
    }
  }
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
