import React from 'react';
import { array, func, object, number } from 'prop-types';

import Select from 'components/Select';

import styles from './index.module.scss';

const limitExemple = [
  { value: 5, name: 5 },
  { value: 10, name: 10 },
  { value: 20, name: 20 },
  { value: 50, name: 50 },
];

const Header = ({
  filters,
  onChangeLocale,
  onChangeContry,
  onChangeLimit,
  limit,
  country,
  locale,
}) => {
  return (
    <div className={styles.wrapper}>
      <Select
        className={styles.select}
        placeholder={locale?.name || 'Local'}
        options={filters[0]?.values}
        onChange={onChangeLocale}
      />
      <Select
        className={styles.select}
        placeholder={country?.name || 'País'}
        options={filters[1]?.values}
        onChange={onChangeContry}
      />
      <Select
        className={styles.select}
        placeholder={limit || 'Quantidade'}
        options={limitExemple}
        onChange={onChangeLimit}
      />
    </div>
  );
};

Header.propTypes = {
  filters: array,
  onChangeLocale: func,
  onChangeContry: func,
  onChangeLimit: func,
  limit: number,
  country: object,
  locale: object,
};

Header.defaultProps = {
  filters: [],
  onChangeLocale: () => '',
  onChangeContry: () => '',
  onChangeLimit: () => null,
  limit: 0,
  country: {},
  locale: {},
};

export default Header;
