/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';

import { connectDatabase } from './database';
import { resolvers, typeDefs } from './graphql';

require('dotenv').config();

const mount = async (app: Application) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  const db = await connectDatabase();

  await server.start();

  server.applyMiddleware({ app, path: '/api' });
  app.listen(process.env.PORT);

  console.log(`[app]: http://localhost:${process.env.PORT}`);
};

mount(express());
