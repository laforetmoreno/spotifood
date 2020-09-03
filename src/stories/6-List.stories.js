import React from 'react';
import ListCards from 'components/ListCards';
import exempleImage from '../assets/error.svg';

export default {
  title: 'ListCards',
  component: ListCards,
};

const data = [
  {
    description: 'fake description',
    images: [{ url: exempleImage }],
    external_urls: { spotify: '#' },
  },
  {
    description: 'fake description',
    images: [{ url: exempleImage }],
    external_urls: { spotify: '#' },
  },
  {
    description: 'fake description',
    images: [{ url: exempleImage }],
    external_urls: { spotify: '#' },
  },
  {
    description: 'fake description',
    images: [{ url: exempleImage }],
    external_urls: { spotify: '#' },
  },
];

export const Default = () => <ListCards data={data} />;
