import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, CLEAR_COMMENTS } from '../../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    case CLEAR_COMMENTS:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;