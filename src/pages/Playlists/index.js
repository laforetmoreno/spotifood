import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, object } from 'prop-types';
import { getHashParams } from '../../helpers';

import { getFeaturedPlaylists } from '../../redux/featuredPlaylists';

const Home = ({ getFeaturedPlaylists, data }) => {
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    if (!userToken) {
      const token = getHashParams();
      setUserToken(token.access_token);
      localStorage.setItem('@token', token.access_token);
    }

    if (userToken) {
      getFeaturedPlaylists({ country: 'BR', locale: 'pt_BR', limit: 10 }, userToken);
    }
  }, [userToken, getFeaturedPlaylists]);

  const renderContent = () => {
    if (data?.playlists?.items?.length > 0) {
      return (
        <ul>
          {data?.playlists.items.map(item => (
            <>
              <li>{item.description}</li>
              <img src={item.images[0].url} alt={item.description} />
            </>
          ))}
        </ul>
      );
    }
    return <a href={process.env.REACT_APP_SERVER_URL}> Logar</a>;
  };

  return <div>{renderContent()}</div>;
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
