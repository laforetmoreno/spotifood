import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { playlists } from 'redux/playlists';
import { filters } from 'redux/filters';

export const reducers = combineReducers({
  playlists,
  filters,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
