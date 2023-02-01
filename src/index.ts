import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();
const port = 9000;

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app, path: '/api' });
};

// FIX: The use of IResolvers is no longer supported in latest version of GraphQL

startServer();
app.listen(port);

console.log(`[app]: http://localhost:${port}`);
