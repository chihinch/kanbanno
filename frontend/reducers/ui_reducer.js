import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import menuReducer from './menu_reducer';

export default combineReducers({
  modal: modalReducer,
  menu: menuReducer
});