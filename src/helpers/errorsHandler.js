import { errosCode } from '../constants';
import SpotityServices from '../services/spotity';
import { GENERIC_ERROR } from '../redux/actions';

const errorsHandler = (error, dispatch) => {
  if (
    error?.response?.data?.error?.status === errosCode.unauthorized ||
    error?.response?.data?.error?.status === errosCode.badRequest
  ) {
    const spotity = SpotityServices();

    spotity.refreshToken();
  } else {
    dispatch({ type: GENERIC_ERROR });
  }
};

export default errorsHandler;
