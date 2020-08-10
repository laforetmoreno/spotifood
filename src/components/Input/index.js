import React from 'react';
import { string, func } from 'prop-types';

import styles from './index.module.scss';

const Input = ({ name, onChange, value, placeholder, label }) => {
  const handleChange = e => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        data-testid="input"
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: func,
  name: string,
  value: string,
  placeholder: string,
  label: string,
};

Input.defaultProps = {
  onChange: () => '',
  name: '',
  value: '',
  placeholder: '',
  label: string,
};

export default Input;
