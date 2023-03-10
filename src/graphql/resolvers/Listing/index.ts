// eslint-disable-next-line import/order
import { ObjectId } from 'mongodb';

// eslint-disable-next-line import/order
import { IResolvers } from '@graphql-tools/utils';

import { Database, Listing } from '~lib/types';

const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      // eslint-disable-next-line @typescript-eslint/ban-types
      _args: {},
      { db }: { db: Database },
    ): Promise<Listing[]> => await db.listings.find({}).toArray(),
  },

  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database },
    ): Promise<Listing> => {
      const deleteResult = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteResult.value) {
        throw new Error('Failed to delete listing');
      }

      return deleteResult.value;
    },
  },

  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};

export default listingResolvers;
