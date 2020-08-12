const localStorageHelper = () => {
  const get = item => localStorage.getItem(item);
  const set = (desciption, item) => localStorage.setItem(desciption, item);
  const remove = item => localStorage.removeItem(item);

  const setAll = token => {
    localStorage.setItem('refresh_token', token.refresh_token);
    localStorage.setItem('access_token', token.access_token);
  };

  return {
    get,
    set,
    remove,
    setAll,
  };
};

export default localStorageHelper;
