import React from 'react';
import List from 'components/List';
import exempleImage from '../assets/error.svg';

export default {
  title: 'List',
  component: List,
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

export const Default = () => <List data={data} />;
