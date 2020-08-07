import FiltersServices from '../services/filters';

const GET_FILTERS = 'GET_FILTERS';
const GET_FILTERS_ERROR = 'GET_FILTERS_ERROR';

const INITIAL_STATE = {
  data: [],
  error: false,
};

export const getFilters = () => async dispatch => {
  try {
    const filters = FiltersServices();

    const response = await filters.get();

    dispatch({ type: GET_FILTERS, payload: response });
  } catch (error) {
    dispatch({ type: GET_FILTERS_ERROR, error });
  }
};

export function filters(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_FILTERS_ERROR:
      return {
        ...state,
        data: [],
        error: true,
      };
    default:
      return state;
  }
}
