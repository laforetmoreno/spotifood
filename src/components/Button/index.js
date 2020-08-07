import React from 'react';
import { string, oneOfType, array } from 'prop-types';

import styles from './index.module.scss';

const Button = ({ children, className, link, target }) => {
  if (link) {
    return (
      <a target={target} rel="noopener noreferrer" className={(className, styles.link)} href={link}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={(className, styles.wrapper)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: string,
  children: oneOfType([string, array]),
  link: string,
  target: string,
};

Button.defaultProps = {
  className: '',
  children: '',
  link: '',
  target: '',
};

export default Button;
