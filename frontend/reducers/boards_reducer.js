import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_BOARDS:
      action.boards.forEach((board) => {
        nextState[board.id] = board;
      });
      return nextState;
    case RECEIVE_BOARD:
      const newBoard = { [action.board.id]: action.board }
      return Object.assign({}, state, newBoard);
    case REMOVE_BOARD:
      nextState = Object.assign({}, state);
      delete nextState[action.board.id];
      return nextState;
    default:
      return state;
  }
};

export default boardsReducer;