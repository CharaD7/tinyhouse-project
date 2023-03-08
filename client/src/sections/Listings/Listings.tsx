import React, { FC } from 'react';
import { server } from '~lib/api';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      numOfGuests
      numOfBeds
      rating
    }
  }
`;

interface Props {
  title: string;
}

export const Listings: FC<Props> = ({ title }) => {
  const fetchListings = () => {
    const listings = server.fetch({ query: LISTINGS });
    console.log(listings);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings</button>
    </div>
  );
};
