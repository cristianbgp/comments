const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

const hostname = "localhost";
const portServer = process.env.PORT || 4000;

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  db.author.create({
    username: "Cristian"
  });
  app.listen({ port: portServer }, () =>
    console.log(
      `🚀 Server ready at http://${hostname}:${portServer}${server.graphqlPath}`
    )
  );
});
