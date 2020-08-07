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
        placeholder={limit?.name || 'Quantidade'}
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
