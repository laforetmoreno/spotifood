import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, object } from 'prop-types';

import Button from 'components/Button';
import List from 'components/List';
import Page from 'components/Page';
import Title from 'components/Title';

import { getFeaturedPlaylists } from 'redux/featuredPlaylists';
import { getHashParams } from 'helpers';

const refreshPageTime = 30000;

const Home = ({ getFeaturedPlaylists, data }) => {
  const [userToken, setUserToken] = useState('');

  const getToken = () => {
    if (!userToken) {
      const token = getHashParams();
      setUserToken(token.access_token);
      localStorage.setItem('@token', token.access_token);
    }
  };

  useEffect(() => {
    getToken();

    if (userToken) {
      getFeaturedPlaylists({ country: 'BR', locale: 'pt_BR', limit: 10 }, userToken);
    }
  }, [userToken, getFeaturedPlaylists]);

  useEffect(() => {
    const interval = setInterval(() => {
      getFeaturedPlaylists({ country: 'BR', locale: 'pt_BR', limit: 10 }, userToken);
    }, refreshPageTime);

    return () => clearInterval(interval);
  });

  return (
    <Page>
      <Title title={data?.message} />
      {data?.playlists?.items?.length ? (
        <List data={data?.playlists.items} />
      ) : (
        <Button link={process.env.REACT_APP_SERVER_URL}>Logar</Button>
      )}
    </Page>
  );
};

const mapStateToProps = ({ featuredPlaylists }) => ({
  data: featuredPlaylists.data,
});

const mapDispatchToProps = dispatch => ({
  getFeaturedPlaylists: bindActionCreators(getFeaturedPlaylists, dispatch),
});

Home.propTypes = {
  getFeaturedPlaylists: func,
  data: object,
};

Home.defaultProps = {
  getFeaturedPlaylists: () => null,
  data: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
