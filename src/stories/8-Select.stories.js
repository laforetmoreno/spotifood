import React from 'react';
import Select from 'components/Select';

export default {
  title: 'Select',
  component: Select,
};

const options = [
  {
    name: 'a',
    value: 'a',
  },
  {
    name: 'b',
    value: 'b',
  },
  {
    name: 'c',
    value: 'c',
  },
];

export const Default = () => <Select label="Select exemple" options={options} />;
