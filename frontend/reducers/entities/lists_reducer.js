import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../../actions/list_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_LISTS:
      return merge({}, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    // case REMOVE_LIST:
    //   nextState = merge({}, state);
    //   delete nextState[action.list.id];
    //   return nextState;
    default:
      return state;
  }
};

export default listsReducer;