const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");
const resolvers = require("../resolvers");
const mockService = require("./mocks/mockService");
const typeDefs = require("../schema");

const deleteCommentTestCase = {
  testName: "Delete one comment",
  query: `
    mutation{
      deleteComment(
        id: 1
      )
    }
    `,
  variables: {},

  context: { db: { comment: mockService } },

  expected: {
    data: {
      deleteComment: 1
    }
  }
};

describe("Schema", () => {
  const cases = [deleteCommentTestCase];
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  cases.forEach(obj => {
    const { testName, query, variables, context, expected } = obj;
    test(`${testName}`, async () => {
      const result = await graphql(schema, query, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
