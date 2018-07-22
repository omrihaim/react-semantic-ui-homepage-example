import {
    TOC_BTN_WAS_PRESSED,
  } from '../events'
  
  const initialState = {
    sidebarMenu: {
        visible: false
      }
  }
  
  function sidebarMenuReducer (state = initialState, action) {
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
  