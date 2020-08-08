import React from 'react';
import { func, instanceOf } from 'prop-types';
import DatePicker from 'react-date-picker';

import styles from './index.module.scss';

const DatePickerWrapper = ({ onChange, value }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>hora</div>
    <DatePicker className={styles.picker} onChange={onChange} value={value} />
  </div>
);

DatePickerWrapper.propTypes = {
  onChange: func,
  value: instanceOf(Date),
};

DatePickerWrapper.defaultProps = {
  onChange: () => '',
  value: new Date(),
};

export default DatePickerWrapper;
