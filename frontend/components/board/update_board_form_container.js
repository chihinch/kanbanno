import { connect } from 'react-redux';

import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.boardId;
  const board = state.entities.boards[boardId];
  const currentUser = state.session.id
  return {
    board: {
      title: board.title,
      description: board.description,
      id: boardId
    },
    formType: 'updateBoard',
    enableDelete: board.admin_id === currentUser
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