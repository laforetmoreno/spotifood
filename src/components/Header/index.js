import React from 'react';
import { array, func, object, string, oneOfType, number, instanceOf } from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import DatePickerWrapper from 'components/DatePickerWrapper';
import Select from 'components/Select';
import Input from 'components/Input';
import Collapse from 'components/Collapse';

import { limitExemple } from '../../constants';

import styles from './index.module.scss';

const Header = ({
  filters,
  onLocaleChange,
  onCountryChange,
  onLimitChange,
  onDateChange,
  onInputChange,
  limit,
  country,
  locale,
  startDate,
  playlist,
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const renderContent = () => (
    <ul className={styles.wrapper}>
      <Select
        className={styles.select}
        placeholder={locale?.value}
        options={filters[0]?.values}
        onChange={onLocaleChange}
        label="Locale"
      />
      <Select
        className={styles.select}
        placeholder={country?.name}
        options={filters[1]?.values}
        onChange={onCountryChange}
        label="Country"
      />
      <Select
        className={styles.select}
        placeholder={limit}
        options={limitExemple}
        onChange={onLimitChange}
        label="Quantity"
      />
      <Input placeholder="Relax" onChange={onInputChange} value={playlist} label="Playlist name" />
      <DatePickerWrapper onChange={onDateChange} value={startDate} />
    </ul>
  );

  const renderPage = () => {
    if (isMobile) {
      return <Collapse>{renderContent()}</Collapse>;
    }
    return renderContent();
  };

  return renderPage();
};

Header.propTypes = {
  filters: array,
  onLocaleChange: func,
  onCountryChange: func,
  onLimitChange: func,
  onDateChange: func,
  onInputChange: func,
  limit: oneOfType([string, number]),
  country: object,
  locale: object,
  startDate: instanceOf(Date),
  playlist: string,
};

Header.defaultProps = {
  filters: [],
  onLocaleChange: () => '',
  onCountryChange: () => '',
  onLimitChange: () => null,
  onDateChange: () => new Date(),
  onInputChange: () => '',
  limit: 0,
  country: {},
  locale: {},
  startDate: new Date(),
  playlist: '',
};

export default Header;
