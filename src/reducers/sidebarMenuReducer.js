import {
    TOC_BTN_WAS_PRESSED,
  } from '../events'
  
  import initialState from './initialState';
  
  function sidebarMenuReducer (state = initialState.sidebarMenu, action) {
    switch(action.type) {
        case TOC_BTN_WAS_PRESSED: {
            console.log("TOC_BTN_WAS_PRESSED");
            console.log("state: ", state);
            
            state =  {
                ...state, 
                visible: !state.visible,
            }
            break;
        }
        default:
            break;
    }
  
    return state;
  }

  export default sidebarMenuReducer;
  