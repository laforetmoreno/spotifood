import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { featuredPlaylists } from 'redux/featuredPlaylists';
import { filters } from 'redux/filters';

export const reducers = combineReducers({
  featuredPlaylists,
  filters,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
