import React from 'react';
import { array, func, object, string, oneOfType, number, instanceOf } from 'prop-types';
import DatePickerWrapper from 'components/DatePickerWrapper';

import Select from 'components/Select';
import { limitExemple } from '../../constants';

import styles from './index.module.scss';

const Header = ({
  filters,
  onChangeLocale,
  onChangeContry,
  onChangeLimit,
  onChangeDate,
  limit,
  country,
  locale,
  startDate,
}) => {
  return (
    <div className={styles.wrapper}>
      <Select
        className={styles.select}
        placeholder={locale?.value}
        options={filters[0]?.values}
        onChange={onChangeLocale}
        label="Local"
      />
      <Select
        className={styles.select}
        placeholder={country?.name}
        options={filters[1]?.values}
        onChange={onChangeContry}
        label="País"
      />
      <Select
        className={styles.select}
        placeholder={limit}
        options={limitExemple}
        onChange={onChangeLimit}
        label="Quantidade"
      />
      <DatePickerWrapper onChange={onChangeDate} value={startDate} />
    </div>
  );
};

Header.propTypes = {
  filters: array,
  onChangeLocale: func,
  onChangeContry: func,
  onChangeLimit: func,
  onChangeDate: func,
  limit: oneOfType([string, number]),
  country: object,
  locale: object,
  startDate: instanceOf(Date),
};

Header.defaultProps = {
  filters: [],
  onChangeLocale: () => '',
  onChangeContry: () => '',
  onChangeLimit: () => null,
  onChangeDate: () => new Date(),
  limit: 0,
  country: {},
  locale: {},
  startDate: new Date(),
};

export default Header;
