const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

const hostname = proccess.env.HOSTNAME || "localhost";
const portServer = process.env.PORT || 4000;

db.sequelize.sync().then(() => {
  db.author.create({
    username: "Cristian"
  });
  server.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://${localhost}:${porServer}${server.graphqlPath}`
    )
  );
});
