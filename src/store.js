import { createStore } from 'redux'; //applyMiddleware, createStore, compose

import reducer from './reducers';

import initialState from './reducers/initialState';

const store = createStore(
  reducer,
  initialState
);

export default store;
