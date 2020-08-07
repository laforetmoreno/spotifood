import React from 'react';
import { string } from 'prop-types';

import Button from '../Button';

import styles from './index.module.scss';

const Card = ({ description, image, link }) => (
  <li className={styles.wrapper}>
    <Button link={link}>
      <span className={styles.description}>{description}</span>
      <img className={styles.image} src={image} alt={description} />
    </Button>
  </li>
);

Card.propTypes = {
  description: string,
  image: string,
  link: string,
};

Card.defaultProps = {
  description: '',
  image: '',
  link: '',
};

export default Card;
