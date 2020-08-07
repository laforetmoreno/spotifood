import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, object, bool } from 'prop-types';

import Button from 'components/Button';
import List from 'components/List';
import Page from 'components/Page';
import Title from 'components/Title';
import Header from 'components/Header';

import { getFeaturedPlaylists } from 'redux/featuredPlaylists';
import { getFilters } from 'redux/filters';
import { getHashParams } from 'helpers';

const refreshPageTime = 30000;

const Playlists = ({
  getFeaturedPlaylists,
  getFilters,
  filters,
  data,
  // loading,
  // filtersLoading,
}) => {
  const [userToken, setUserToken] = useState('');
  const [locale, setLocale] = useState({ name: 'pt_BR', value: 'pt_BR' });
  const [country, setCountry] = useState({ name: 'Brasil', value: 'BR' });
  const [limit, setLimit] = useState(5);

  const onChangeLocale = (name, value) => setLocale({ name, value });
  const onChangeContry = (name, value) => setCountry({ name, value });
  const onChangeLimit = (name, value) => setLimit({ name, value });

  const getToken = () => {
    if (!userToken) {
      const token = getHashParams();
      setUserToken(token.access_token);
      localStorage.setItem('@token', token.access_token);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    getToken();

    if (userToken) {
      getFeaturedPlaylists(
        { country: country.value, locale: locale.value, limit: limit.value },
        userToken,
      );
    }
  }, [userToken, getFeaturedPlaylists, locale, country, limit]);

  useEffect(() => {
    const interval = setInterval(() => {
      getFeaturedPlaylists(
        { country: country.value, locale: locale.value, limit: limit.value },
        userToken,
      );
    }, refreshPageTime);

    return () => clearInterval(interval);
  });

  return (
    <Page>
      <Header
        onChangeLocale={onChangeLocale}
        onChangeContry={onChangeContry}
        onChangeLimit={onChangeLimit}
        locale={locale}
        country={country}
        limit={limit}
        filters={filters.data}
      />
      <Title title={data?.message} />
      {data?.playlists?.items?.length ? (
        <List data={data?.playlists.items} />
      ) : (
        <Button link={process.env.REACT_APP_SERVER_URL}>Logar</Button>
      )}
    </Page>
  );
};

const mapStateToProps = ({ featuredPlaylists, filters }) => ({
  data: featuredPlaylists.data,
  loading: featuredPlaylists.loading,
  filtersLoading: filters.loading,
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
  filtersLoading: bool,
};

Playlists.defaultProps = {
  getFeaturedPlaylists: () => null,
  getFilters: () => null,
  filters: {},
  data: {},
  loading: true,
  filtersLoading: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
