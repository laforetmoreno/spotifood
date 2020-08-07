import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import Routes from 'Routes';
import store from 'store';

const customHistory = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Routes history={customHistory} />
  </Provider>
);

export default App;
