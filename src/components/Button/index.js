import React from 'react';
import { string, oneOfType, array, func } from 'prop-types';

import styles from './index.module.scss';

const Button = ({ children, className, link, target, onClick }) => {
  if (link) {
    return (
      <a target={target} rel="noopener noreferrer" className={(className, styles.link)} href={link}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} type="button" className={(className, styles.wrapper)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: string,
  children: oneOfType([string, array]),
  link: string,
  target: string,
  onClick: func,
};

Button.defaultProps = {
  className: '',
  children: '',
  link: '',
  target: '',
  onClick: () => null,
};

export default Button;
