const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: ID!
    username: String!
    comments: [Comment!]!
  }
  type Comment {
    id: ID!
    content: String!
    authorId: ID!
    author: Author!
  }
  type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
    author(id: ID!): Author
    authors: [Author!]!
  }
  type Mutation {
    createComment(content: String!, authorId: ID!): Comment!
    updateComment(id: ID!, content: String!): [Int!]!
    deleteComment(id: ID!): Int!
    createAuthor(username: String!): Author!
  }
`;

module.exports = typeDefs;
