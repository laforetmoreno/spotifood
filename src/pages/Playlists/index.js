/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { func, object, bool } from 'prop-types';

import Page from 'components/Page';
import Header from 'components/Header';
import Title from 'components/Title';
import Loader from 'components/Loader';
import Error from 'components/Error';
import List from 'components/List';

import { getHashParams, handleCountries, localStorageHelper } from 'helpers';
import { getFeaturedPlaylists } from 'redux/playlists';
import { getFilters } from 'redux/filters';
import useInterval from 'hooks/useInterval';

const refreshPageTime = 30000;

const Playlists = () => {
  const dispatch = useDispatch()
  const {
    data,
    loading,
    genericError
  } = useSelector(state => state.playlists)

  const {
    data: filters,
  } = useSelector(state => state.filters)

  console.log("Playlists -> data", data)
  const [locale, setLocale] = useState({ name: 'pt_BR', value: 'pt_BR' });
  const [country, setCountry] = useState({ name: 'Brasil', value: 'BR' });
  const [limit, setLimit] = useState(5);
  const [playlist, setPaylist] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = format(startDate, "yyyy-MM-dd'T'HH:mm:ss");

  const userToken = getHashParams();
  const storage = localStorageHelper();
  const hasToken =
    storage.get('access_token') === 'undefined' || storage.get('access_token') === null;

  const onLocaleChange = (value, name) => setLocale({ name, value });
  const onCountryChange = value => setCountry(handleCountries(value));
  const onLimitChange = value => setLimit(value);
  const onDateChange = value => setStartDate(value);
  const onInputChange = value => setPaylist(value);

  if (hasToken) storage.setAll(getHashParams());


  useEffect(() => {
    dispatch(getFilters());
  }, [getFilters]);

  const query = {
    country: country.value,
    locale: locale.value,
    timestamp: formattedDate,
    limit,
  };

  useEffect(() => {
    dispatch(getFeaturedPlaylists(query, storage.get('access_token')));
  }, [getFeaturedPlaylists]);

  useEffect(() => {
    if (locale.name !== 'pt_BR') {
      dispatch(getFeaturedPlaylists(query, storage.get('access_token')));

    }
  }, [getFeaturedPlaylists, locale, country, limit, formattedDate]);

  useInterval(() => {
    if (userToken.access_token) dispatch(getFeaturedPlaylists(query, storage.get('access_token')));
  }, refreshPageTime);

  const filterData = () => {
    if (playlist) {
      return data?.playlists?.items?.filter(item =>
        item.description.toLowerCase().includes(playlist.toLowerCase()),
      );
    }

    return data?.playlists?.items;
  };

  const renderContent = () => {
    if (loading && userToken?.access_token) {
      return <Loader />;
    }
    if (genericError) {
      return <Error />;
    }
    if (data?.playlists?.items?.length && !loading) {
      return (
        <>
          <Header
            onLocaleChange={onLocaleChange}
            onCountryChange={onCountryChange}
            onLimitChange={onLimitChange}
            onDateChange={onDateChange}
            onInputChange={onInputChange}
            filters={filters.data}
            locale={locale}
            country={country}
            limit={limit}
            startDate={startDate}
            playlist={playlist}
          />
          <Title title={data?.message} />
          <List data={filterData()} />
        </>
      );
    }

    if (userToken?.length > 0 || userToken?.access_token === undefined) {
      window.location.replace(process.env.REACT_APP_SERVER_URL);
    }
  };

  return <Page>{renderContent()}</Page>;
};

Playlists.propTypes = {
  getFeaturedPlaylists: func,
  getFilters: func,
  filters: object,
  data: object,
  loading: bool,
  genericError: bool,
};

Playlists.defaultProps = {
  getFeaturedPlaylists: () => null,
  getFilters: () => null,
  filters: {},
  data: {},
  loading: true,
  genericError: false,
};

export default Playlists;
