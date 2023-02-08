import { IResolvers } from '@graphql-tools/utils';
import { ObjectId } from 'mongodb';

import { Database } from '..//lib/types';

const resolvers: IResolvers = {
  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.listings.find({}).toArray();
    },
  },

  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database },
    ) => {
      const deleteResult = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteResult.value) {
        throw new Error('Failed to delete listing');
      }

      return deleteResult.value;
    },
  },
};

export default resolvers;
