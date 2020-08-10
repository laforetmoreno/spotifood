import React from 'react';
import { string } from 'prop-types';
import Button from 'components/Button';
import errorImage from '../../assets/error.svg';

import styles from './index.module.scss';

const Error = ({ message }) => (
  <div data-testid="error" className={styles.wrapper}>
    <span className={styles.message}>{message}</span>
    <img className={styles.image} alt={message} src={errorImage} />
    <Button onClick={() => window.location.reload()}>Tentar novamente</Button>
  </div>
);

Error.propTypes = {
  message: string,
};

Error.defaultProps = {
  message: 'Ops',
};

export default Error;
