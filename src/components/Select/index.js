import React from 'react';
import { func, string, arrayOf, bool, object, oneOfType, number } from 'prop-types';

import styles from './index.module.scss';

const Select = ({ onChange, placeholder, disabled, options, className, name, label }) => {
  const handleChange = e => {
    if (onChange) onChange(e.target.name, e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <select
        disabled={disabled}
        className={`${styles.select} ${className} ${disabled && styles.disabled}`}
        onChange={handleChange}
        name={name}
        defaultValue="default"
        data-testid="select"
      >
        <>
          <option value="default">{placeholder}</option>
          {options.map(option => (
            <option
              key={option.value ? option.value : option}
              value={option.value ? option.value : option}
            >
              {option.name ? option.name : option}
            </option>
          ))}
        </>
      </select>
    </div>
  );
};

Select.propTypes = {
  onChange: func,
  options: arrayOf(oneOfType([string, object])),
  placeholder: oneOfType([number, string]),
  disabled: bool,
  className: string,
  name: string,
  label: string,
};

Select.defaultProps = {
  onChange: () => null,
  options: [],
  placeholder: '',
  disabled: false,
  className: '',
  name: '',
  label: '',
};

export default Select;
