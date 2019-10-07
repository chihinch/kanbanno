import * as BoardAPIUtil from '../util/board_api_util';

// Board action type constants
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const DESTROY_BOARD = 'DESTROY_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

// Board action creators
export const receiveBoards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards,
  };
};

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board,
  };
};

export const destroyBoard = (board) => {
  return {
    type: DESTROY_BOARD,
    board,
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  };
};

// Board thunk action creators
export const fetchBoards = () => (dispatch) => {
  return BoardAPIUtil.fetchBoards().then((boards) => {
    dispatch(receiveBoards(boards))}, 
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const fetchBoard = (id) => (dispatch) => {
  return BoardAPIUtil.fetchBoard(id).then((board) => {
    dispatch(receiveBoard(board))}, 
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const createBoard = (board) => (dispatch) => {
  return BoardAPIUtil.createBoard(board).then((board) => {
    dispatch(receiveBoard(board))},
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const updateBoard = (board) => (dispatch) => {
  return BoardAPIUtil.updateBoard(board).then((board) => {
    dispatch(receiveBoard(board))},
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const destroyBoard = (board) => (dispatch) => {
  return BoardAPIUtil.destroyBoard(board.id).then((board) => {
    dispatch(destroyBoard(board))},
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
}