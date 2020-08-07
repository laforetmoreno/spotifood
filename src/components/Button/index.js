import React from 'react';
import { string } from 'prop-types';

import styles from './index.module.scss';

const Button = ({ children, className, link }) => {
  if (link) {
    return <a href={link}>children</a>;
  }
  return (
    <button type="button" className={(className, styles.wrapper)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: string,
  children: string,
  link: string,
};

Button.defaultProps = {
  className: '',
  children: '',
  link: '',
};

export default Button;
