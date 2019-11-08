import { RECEIVE_LISTS, RECEIVE_LIST } from '../../actions/list_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_LISTS:
      return merge({}, action.lists);
    case RECEIVE_BOARD:
      // debugger
      return merge({}, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, {[action.list.id]: action.list});
    default:
      return state;
  }
};

export default listsReducer;