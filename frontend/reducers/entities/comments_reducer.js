import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, CLEAR_COMMENTS } from '../../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_BOARDS:
      return merge({}, action.comments);
    case RECEIVE_BOARD:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_BOARD:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;