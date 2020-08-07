import FiltersServices from '../services/filters';

const GET_FILTERS_START = 'GET_FILTERS_START';
const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';
const GET_FILTERS_ERROR = 'GET_FILTERS_ERROR';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: true,
};

export const getFilters = () => async dispatch => {
  try {
    dispatch({ type: GET_FILTERS_START });
    const filters = FiltersServices();

    const response = await filters.get();

    dispatch({ type: GET_FILTERS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: GET_FILTERS_ERROR, error });
  }
};

export function filters(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_FILTERS_START:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_FILTERS_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
