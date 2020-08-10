import React from 'react';
import { string } from 'prop-types';

import styles from './index.module.scss';

const Title = ({ title }) => (
  <h1 data-testid="title" className={styles.wrapper}>
    {title}
  </h1>
);

Title.propTypes = {
  title: string,
};

Title.defaultProps = {
  title: '',
};

export default Title;
