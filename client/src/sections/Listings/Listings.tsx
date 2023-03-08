import React, { FC } from 'react';

interface Props {
  title: string;
}

export const Listings: FC<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};
