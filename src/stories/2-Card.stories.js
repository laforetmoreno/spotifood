import React from 'react';
import Card from 'components/Card';
import exempleImage from '../assets/error.svg';
import '../index.scss';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => <Card description="Card" link="#" image={exempleImage} />;
