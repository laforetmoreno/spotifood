import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { format } from 'date-fns';
import { func, object, bool } from 'prop-types';

import List from 'components/List';
import Page from 'components/Page';
import Title from 'components/Title';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Error from 'components/Error';

import { getFeaturedPlaylists } from 'redux/featuredPlaylists';
import { getFilters } from 'redux/filters';
import { getHashParams, handleCountries } from 'helpers';

const refreshPageTime = 30000;

const Playlists = ({ getFeaturedPlaylists, getFilters, filters, data, loading, error }) => {
  const [userToken, setUserToken] = useState('');
  const [locale, setLocale] = useState({ name: 'pt_BR', value: 'pt_BR' });
  const [country, setCountry] = useState({ name: 'Brasil', value: 'BR' });
  const [limit, setLimit] = useState(5);
  const [playlist, setPaylist] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = format(startDate, "yyyy-MM-dd'T'HH:mm:ss");

  const onLocaleChange = (value, name) => setLocale({ name, value });
  const onCountryChange = value => setCountry(handleCountries(value));
  const onLimitChange = value => setLimit(value);
  const onDateChange = value => setStartDate(value);
  const onInputChange = value => setPaylist(value);

  const getToken = () => {
    if (!userToken) {
      const token = getHashParams();
      setUserToken(token.access_token);
    }
  };

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  const query = {
    country: country.value,
    locale: locale.value,
    timestamp: formattedDate,
    limit,
  };

  useEffect(() => {
    getToken();

    if (userToken) {
      getFeaturedPlaylists(query, userToken);
    }
  }, [userToken, getFeaturedPlaylists, locale, country, limit, formattedDate]);

  useEffect(() => {
    if (userToken) {
      const interval = setInterval(() => {
        getFeaturedPlaylists(query, userToken);
      }, refreshPageTime);

      return () => clearInterval(interval);
    }
  });

  const filterData = () => {
    if (playlist) {
      return data?.playlists?.items?.filter(item =>
        item.description.toLowerCase().includes(playlist.toLowerCase()),
      );
    }

    return data?.playlists?.items;
  };

  const renderContent = () => {
    if (loading && userToken) {
      return <Loader />;
    }
    if (error) {
      return <Error />;
    }
    if (data?.playlists?.items?.length && !loading && !error) {
      return (
        <>
          <Header
            onLocaleChange={onLocaleChange}
            onCountryChange={onCountryChange}
            onLimitChange={onLimitChange}
            onDateChange={onDateChange}
            onInputChange={onInputChange}
            locale={locale}
            country={country}
            limit={limit}
            filters={filters.data}
            startDate={startDate}
            playlist={playlist}
          />
          <Title title={data?.message} />
          <List data={filterData()} />
        </>
      );
    }

    if (userToken?.length > 0 || userToken === undefined) {
      window.location.replace(process.env.REACT_APP_SERVER_URL);
    }
  };

  return <Page>{renderContent()}</Page>;
};

const mapStateToProps = ({ featuredPlaylists, filters }) => {
  const { data, loading, error } = featuredPlaylists;
  return {
    data,
    loading,
    error,
    filters,
  };
};

const mapDispatchToProps = dispatch => ({
  getFeaturedPlaylists: bindActionCreators(getFeaturedPlaylists, dispatch),
  getFilters: bindActionCreators(getFilters, dispatch),
});

Playlists.propTypes = {
  getFeaturedPlaylists: func,
  getFilters: func,
  filters: object,
  data: object,
  loading: bool,
  error: bool,
};

Playlists.defaultProps = {
  getFeaturedPlaylists: () => null,
  getFilters: () => null,
  filters: {},
  data: {},
  loading: true,
  error: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
