import React from 'react';
import { array, func, object } from 'prop-types';
import Select from 'components/Select';
import { limitExemple } from '../../constants';

import styles from './index.module.scss';

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
        placeholder={locale?.name}
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
        placeholder={limit?.name}
        options={limitExemple}
        onChange={onChangeLimit}
        label="Quantidade"
      />
    </div>
  );
};

Header.propTypes = {
  filters: array,
  onChangeLocale: func,
  onChangeContry: func,
  onChangeLimit: func,
  limit: object,
  country: object,
  locale: object,
};

Header.defaultProps = {
  filters: [],
  onChangeLocale: () => '',
  onChangeContry: () => '',
  onChangeLimit: () => null,
  limit: {},
  country: {},
  locale: {},
};

export default Header;
