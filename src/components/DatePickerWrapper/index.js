import React from 'react';
import { func, instanceOf, string } from 'prop-types';
import DatePicker from 'react-date-picker';

import styles from './index.module.scss';

const DatePickerWrapper = ({ onChange, value, label }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>{label}</div>
    <DatePicker className={styles.picker} onChange={onChange} value={value} />
  </div>
);

DatePickerWrapper.propTypes = {
  onChange: func,
  value: instanceOf(Date),
  label: string,
};

DatePickerWrapper.defaultProps = {
  onChange: () => '',
  value: new Date(),
  label: 'Date',
};

export default DatePickerWrapper;
