import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import menuReducer from './menu_reducer';
import membershipReducer from './membership_reducer';

export default combineReducers({
  modal: modalReducer,
  menu: menuReducer,
  membership: membershipReducer
});