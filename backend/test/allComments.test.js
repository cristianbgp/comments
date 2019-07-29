const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");
const resolvers = require("../resolvers");
const mockService = require("./mocks/mockService");
const typeDefs = require("../schema");

const allCommentsTestCase = {
  testName: "Get all comments",
  query: `
    query{
      comments {
        id
        content
      }
    }
    `,
  variables: {},

  context: { db: { comment: mockService } },

  expected: {
    data: {
      comments: [{ id: "1", content: "🤔" }, { id: "2", content: "🤨" }]
    }
  }
};

describe("Schema", () => {
  const cases = [allCommentsTestCase];
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  cases.forEach(obj => {
    const { testName, query, variables, context, expected } = obj;
    test(`${testName}`, async () => {
      const result = await graphql(schema, query, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
