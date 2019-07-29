const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");
const resolvers = require("../resolvers");
const mockService = require("./mocks/mockService");
const typeDefs = require("../schema");

const createCommentTestCase = {
  testName: "Create one comment",
  query: `
    mutation {
      createComment(
        content: "testing content"
        authorId: "2"
      ){
        content
        authorId
      }
    }
    `,
  variables: {},

  context: { db: { comment: mockService } },

  expected: {
    data: {
      createComment: {
        content: "🤓",
        authorId: "1"
      }
    }
  }
};

describe("Schema", () => {
  const cases = [createCommentTestCase];
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  cases.forEach(obj => {
    const { testName, query, variables, context, expected } = obj;
    test(`${testName}`, async () => {
      const result = await graphql(schema, query, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
