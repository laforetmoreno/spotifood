import SpotityServices from '../services/spotity';

const GET_FEATURED_PLAYLISTS = 'GET_FEATURED_PLAYLISTS';
const GET_FEATURED_PLAYLISTS_ERROR = 'GET_FEATURED_PLAYLISTS';

const INITIAL_STATE = {
  data: {
    message: '',
    playlists: {},
  },
  error: false,
};

export const getFeaturedPlaylists = (params, token) => async dispatch => {
  try {
    const spotity = SpotityServices();

    const { message, playlists } = await spotity.getFeaturedPlaylists(token, params);

    dispatch({
      type: GET_FEATURED_PLAYLISTS,
      message,
      playlists,
    });
  } catch (error) {
    dispatch({ type: GET_FEATURED_PLAYLISTS_ERROR, error });
  }
};

export function featuredPlaylists(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_FEATURED_PLAYLISTS:
      return {
        ...state,
        data: {
          message: action.message,
          playlists: action.playlists,
        },
      };
    case GET_FEATURED_PLAYLISTS_ERROR:
      return {
        ...state,
        data: {},
        error: true,
      };
    default:
      return state;
  }
}
