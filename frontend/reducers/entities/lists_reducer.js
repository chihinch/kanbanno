import { RECEIVE_LISTS, RECEIVE_LIST, CLEAR_LISTS } from '../../actions/list_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return merge({}, action.lists);
    case RECEIVE_BOARD:
      return merge({}, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, {[action.list.id]: action.list});
    case CLEAR_LISTS:
      return {};
    default:
      return state;
  }
};

export default listsReducer;