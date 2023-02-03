import { MongoClient, ServerApiVersion } from 'mongodb';
import { Database } from '../lib/types';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(uri, {
    serverApi: ServerApiVersion.v1,
  });

  const db = client.db('main');

  return {
    listings: db.collection('test_listings'),
  };
};
