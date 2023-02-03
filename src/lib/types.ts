import { Collection, ObjectId } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfBaths: number;
  numOfBeds: number;
  numOfGuests: number;
  rating: number;
}

export interface Database {
  listings: Collection<Listing>;
}
