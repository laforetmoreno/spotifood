import axios from 'axios';

const SpotityServices = () => {
  const getFeaturedPlaylists = async (token, params) => {
    const { data } = await axios.get(process.env.REACT_APP_REACT_APP_SPOTIFY_API, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    });

    return data;
  };

  return {
    getFeaturedPlaylists,
  };
};

export default SpotityServices;
