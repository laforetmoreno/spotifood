/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import Header from 'components/Header';
import Title from 'components/Title';
import Loader from 'components/Loader';
import Error from 'components/Error';
import ListCards from 'components/ListCards';

import { getHashParams, handleCountries, localStorageHelper, formattedDate } from 'helpers';
import { getFeaturedPlaylists } from 'redux/playlists';
import { getFilters } from 'redux/filters';
import { REFRESH_PAGE_TIME } from '../../constants';
import useInterval from 'hooks/useInterval';

const Playlists = () => {
  const dispatch = useDispatch();
  const { data, loading, genericError } = useSelector(state => state.playlists);
  const { data: filters } = useSelector(state => state.filters);

  const [locale, setLocale] = useState({ name: 'pt_BR', value: 'pt_BR' });
  const [country, setCountry] = useState({ name: 'Brasil', value: 'BR' });
  const [limit, setLimit] = useState(5);
  const [playlistName, setPaylistName] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const userToken = getHashParams();
  const storage = localStorageHelper();
  const notHasToken = storage.get('access_token') === 'undefined' || storage.get('access_token') === null;

  const onLocaleChange = (value, name) => setLocale({ name, value });
  const onCountryChange = value => setCountry(handleCountries(value));
  const onLimitChange = value => setLimit(value);
  const onDateChange = value => setStartDate(value);
  const onInputChange = value => setPaylistName(value);

  if (notHasToken) storage.setAll(getHashParams());

  useEffect(() => {
    dispatch(getFilters());
  }, [getFilters]);

  const query = {
    country: country.value,
    locale: locale.value,
    timestamp: formattedDate(startDate),
    limit,
  };

  useEffect(() => {
    dispatch(getFeaturedPlaylists(query, storage.get('access_token')));
  }, [getFeaturedPlaylists, locale, country, limit, formattedDate(startDate)]);

  useInterval(() => {
    if (userToken.access_token) dispatch(getFeaturedPlaylists(query, storage.get('access_token')));
  }, REFRESH_PAGE_TIME);

  const filterData = () => {
    if (playlistName) {
      return data?.playlists?.items?.filter(item =>
        item.description.toLowerCase().includes(playlistName.toLowerCase()),
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
            filters={filters}
            locale={locale}
            country={country}
            limit={limit}
            startDate={startDate}
            playlistName={playlistName}
          />
          {filterData().length > 0 && <Title title={data?.message} />}
          <ListCards data={filterData()} />
        </>
      );
    }

    if (userToken?.length > 0 || userToken?.access_token === undefined) {
      window.location.replace(process.env.REACT_APP_SERVER_URL);
    }
  };

  return <Page>{renderContent()}</Page>;
};

export default Playlists;
