import FiltersServices from '../services/filters';
import { errorsHandler } from '../helpers';
import { GET_FILTERS } from './actions';

const INITIAL_STATE = {
  data: [],
};

export const getFilters = () => async dispatch => {
  try {
    const filters = FiltersServices();

    const response = await filters.get();

    dispatch({ type: GET_FILTERS, payload: response });
  } catch (error) {
    errorsHandler(error, dispatch);
  }
};

export const filters = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
