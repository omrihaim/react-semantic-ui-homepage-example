import { createStore } from 'redux'; //applyMiddleware, createStore, compose

import reducer from './reducers';

const initialState = {
  sidebarMenu: {
    visible: false
  },
  followingMenu: {
    visible: false
  }
};

const store = createStore(
  reducer,
  initialState
);

export default store;
