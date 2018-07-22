import {combineReducers} from 'redux';

import sidebarMenuReducer from './reducers/sidebarMenuReducer';
import followingMenuReducer from './reducers/followingMenuReducer';

export default combineReducers({
    sidebarMenu: sidebarMenuReducer,
    followingMenu: followingMenuReducer
})
