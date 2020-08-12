import SpotityServices from '../services/spotity';
import { errorsHandler } from '../helpers';
import {
  GET_FEATURED_PLAYLISTS_START,
  GET_FEATURED_PLAYLISTS_SUCCESS,
  GET_FEATURED_PLAYLISTS_ERROR,
  GENERIC_ERROR,
} from './actions';

const INITIAL_STATE = {
  data: {
    message: '',
    playlists: {},
  },
  loading: true,
  error: false,
  genericError: false,
};

export const getFeaturedPlaylists = (params, token) => async dispatch => {
  try {
    dispatch({ type: GET_FEATURED_PLAYLISTS_START });
    const spotity = SpotityServices();

    const { message, playlists } = await spotity.getFeaturedPlaylists(params, token);

    dispatch({
      type: GET_FEATURED_PLAYLISTS_SUCCESS,
      message,
      playlists,
    });
  } catch (error) {
    errorsHandler(error, dispatch);
  }
};

export const playlists = (state = INITIAL_STATE, action = {}) => {
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
        genericError: false,
      };
    case GET_FEATURED_PLAYLISTS_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: true,
      };
    case GENERIC_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        genericError: true,
      };
    default:
      return state;
  }
};
