import axios from 'axios';
import { localStorageHelper } from '../helpers';

const { REACT_APP_REACT_APP_SPOTIFY_API, REACT_APP_SERVER_URL } = process.env;

const SpotityServices = () => {
  const getFeaturedPlaylists = async (params, token) => {
    const { data } = await axios(REACT_APP_REACT_APP_SPOTIFY_API, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    });

    return data;
  };

  const refreshToken = async () => {
    const storage = localStorageHelper();
    const response = await axios(`${REACT_APP_SERVER_URL}/refresh_token/`, {
      params: {
        refresh_token: storage.get('refresh_token'),
      },
    });

    storage.remove('access_token');

    storage.set('access_token', response?.data?.access_token);
  };

  return {
    getFeaturedPlaylists,
    refreshToken,
  };
};

export default SpotityServices;
