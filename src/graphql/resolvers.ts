import { IResolvers } from '@graphql-tools/utils';

import { Database } from '..//lib/types';
import { listings } from '../listing';

const resolvers: IResolvers = {
  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.listings.find({}).toArray();
    },
  },

  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }

        throw new Error('Failed to delete listing');
      }
    },
  },
};

export default resolvers;
