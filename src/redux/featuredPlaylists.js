import SpotityServices from '../services/spotity';

const GET_FEATURED_PLAYLISTS_START = 'GET_FEATURED_PLAYLISTS_START';
const GET_FEATURED_PLAYLISTS_SUCCESS = 'GET_FEATURED_PLAYLISTS_SUCCESS';
const GET_FEATURED_PLAYLISTS_ERROR = 'GET_FEATURED_PLAYLISTS';

const INITIAL_STATE = {
  data: {
    message: '',
    playlists: {},
  },
  loading: true,
  error: false,
};

export const getFeaturedPlaylists = (params, token) => async dispatch => {
  try {
    dispatch({ type: GET_FEATURED_PLAYLISTS_START });
    const spotity = SpotityServices();

    const { message, playlists } = await spotity.getFeaturedPlaylists(token, params);

    dispatch({
      type: GET_FEATURED_PLAYLISTS_SUCCESS,
      message,
      playlists,
    });
  } catch (error) {
    dispatch({ type: GET_FEATURED_PLAYLISTS_ERROR, error });
  }
};

export const featuredPlaylists = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_FEATURED_PLAYLISTS_START:
      return {
        ...state,
        data: {},
        loading: true,
      };
    case GET_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          message: action.message,
          playlists: action.playlists,
        },
      };
    case GET_FEATURED_PLAYLISTS_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: true,
      };
    default:
      return state;
  }
};
