import { OPEN_MENU, CLOSE_MENU } from '../../actions/menu_actions';

const menuReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MENU:
      return action.menu;
    case CLOSE_MENU:
      return null;
    default:
      return state;
  }
};

export default menuReducer;