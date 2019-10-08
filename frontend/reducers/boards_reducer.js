import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_BOARD:
      const newBoard = { [action.board.id]: action.board }
      return merge({}, state, newBoard);
    case REMOVE_BOARD:
      nextState = merge({}, state);
      delete nextState[action.board.id];
      return nextState;
    default:
      return state;
  }
};

export default boardsReducer;