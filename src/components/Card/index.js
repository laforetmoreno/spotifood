import React from 'react';
import { string } from 'prop-types';

import Button from '../Button';

import styles from './index.module.scss';

const Card = ({ description, image, link }) => (
  <li data-testid="card" className={styles.wrapper}>
    <Button target="_blank" link={link}>
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
