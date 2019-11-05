import { connect } from 'react-redux';

import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => {
  // now we have ownProps and I can set the boardId from that
  // const boardId = parseInt(Object.keys(state.entities.boards)[0]);
  const boardId = ownProps.boardId;
  const board = state.entities.boards[boardId];
  return {
    board: {
      title: board.title,
      description: board.description,
      id: boardId
    },
    formType: 'updateBoard'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (board) => dispatch(updateBoard(board)),
    deleteBoard: (id) => dispatch(deleteBoard(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);