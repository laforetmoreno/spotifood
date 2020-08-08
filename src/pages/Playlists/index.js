import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { format } from 'date-fns';
import { func, object, bool } from 'prop-types';

import Button from 'components/Button';
import List from 'components/List';
import Page from 'components/Page';
import Title from 'components/Title';
import Header from 'components/Header';
import Loader from 'components/Loader';

import { getFeaturedPlaylists } from 'redux/featuredPlaylists';
import { getFilters } from 'redux/filters';
import { getHashParams } from 'helpers';

const refreshPageTime = 30000;

const Playlists = ({ getFeaturedPlaylists, getFilters, filters, data, loading }) => {
  const [userToken, setUserToken] = useState('');
  const [locale, setLocale] = useState({ name: 'pt_BR', value: 'pt_BR' });
  const [country, setCountry] = useState({ name: 'Brasil', value: 'BR' });
  const [limit, setLimit] = useState(5);
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = format(startDate, "yyyy-MM-dd'T'HH:mm:ss");

  const onChangeLocale = (value, name) => setLocale({ name, value });
  const onChangeContry = (value, name) => setCountry({ name, value });
  const onChangeLimit = value => setLimit(value);
  const onChangeDate = value => setStartDate(value);

  const getToken = () => {
    if (!userToken) {
      const token = getHashParams();
      setUserToken(token.access_token);
      // localStorage.setItem('@token', token.access_token);
    }
  };

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  useEffect(() => {
    getToken();

    if (userToken) {
      getFeaturedPlaylists(
        {
          country: country.value,
          locale: locale.value,
          limit: limit.value,
          timestamp: formattedDate,
        },
        userToken,
      );
    }
  }, [userToken, getFeaturedPlaylists, locale, country, limit, formattedDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      getFeaturedPlaylists(
        { country: country.value, locale: locale.value, limit: limit.value },
        userToken,
      );
    }, refreshPageTime);

    return () => clearInterval(interval);
  });

  const renderContent = () => {
    if (loading && userToken) {
      return <Loader />;
    }
    if (data?.playlists?.items?.length && !loading) {
      return (
        <>
          <Header
            onChangeLocale={onChangeLocale}
            onChangeContry={onChangeContry}
            onChangeLimit={onChangeLimit}
            locale={locale}
            country={country}
            limit={limit}
            filters={filters.data}
            onChangeDate={onChangeDate}
            startDate={startDate}
          />
          <Title title={data?.message} />
          <List data={data?.playlists.items} />
        </>
      );
    }

    return <Button link={process.env.REACT_APP_SERVER_URL}>Logar</Button>;
  };

  return <Page>{renderContent()}</Page>;
};

const mapStateToProps = ({ featuredPlaylists, filters }) => ({
  data: featuredPlaylists.data,
  loading: featuredPlaylists.loading,
  filters,
});

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
};

Playlists.defaultProps = {
  getFeaturedPlaylists: () => null,
  getFilters: () => null,
  filters: {},
  data: {},
  loading: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
