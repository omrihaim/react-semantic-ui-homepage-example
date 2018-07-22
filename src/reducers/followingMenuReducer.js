import {
    MASTERHEAD_OFF_SCREEN,
    MASTERHEAD_ON_SCREEN,
  } from '../events'
  
  import initialState from './initialState';
  
  function followingMenuReducer (state = initialState.followingMenu, action) {
    switch(action.type) {
        case MASTERHEAD_OFF_SCREEN: {
            console.log("MASTERHEAD_OFF_SCREEN");
            state =  {
                ...state, 
                visible: true,
            }
            break;
        }

        case MASTERHEAD_ON_SCREEN: {
            console.log("MASTERHEAD_ON_SCREEN");
            state =  {
                ...state, 
                visible: false,
            }
            break;
        }

        default:
            break;
    }
  
    return state;
  }

  export default followingMenuReducer;
  