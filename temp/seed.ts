require('dotenv').config();

import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types';

import { ObjectId } from 'mongodb';

const seed = async () => {
  try {
    console.log('[seed]: started...');

    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        address: '3210 Scotchmere Dr W, Toronto, ON, CA',
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: 'Luxurious home with private pool',
        image:
          'https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        address: '100 Hollywood Hills Dr, Los Angeles, California',
        price: 15000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 4,
      },
      {
        _id: new ObjectId(),
        title: 'Single bedroom located in the heart of downtown San Fransisco',
        image:
          'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address: '19 Hollywood Hills Dr, Los Angeles, California',
        price: 8000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 3,
      },
      {
        _id: new ObjectId(),
        title: 'Broad Kitchen with nicely furnished rooms',
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        address: '100 Hollywood Hills Dr, Los Angeles, California',
        price: 14000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: 'Single bedroom located at San Francisco, CA, USA',
        image:
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address: '202 Hollywood Hills Dr, San Francisco, CA, USA',
        price: 18000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 4,
      },
      {
        _id: new ObjectId(),
        title: 'Clean and fully furnished apartment with library',
        image:
          'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address: '699 Hollywood Hills Dr, Los Angeles, California',
        price: 12000,
        numOfGuests: 1,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 3,
      },
    ];
  } catch {
    throw new Error('[seed]: failed to seed database.');
  }
};
seed();
