import axios from 'axios';

const FiltersServices = () => {
  const get = async () => {
    const {
      data: { filters },
    } = await axios.get(process.env.REACT_APP_MOCKY_FILTERS_URL);

    return filters;
  };

  return {
    get,
  };
};

export default FiltersServices;
