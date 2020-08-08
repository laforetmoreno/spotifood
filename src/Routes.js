import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';

import { routes } from './constants';

import Playlists from './pages/Playlists';

const Routes = ({ history }) => {
  const { home } = routes;

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path={home} component={Playlists} exact />
          <Redirect from="*" to={home} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  history: object,
};

Routes.defaultProps = {
  history: {},
};

export default Routes;
