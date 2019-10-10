import { connect } from 'react-redux';

import { updateBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => {
  // now we have ownProps and I can set the boardId from that
  // debugger
  // const boardId = parseInt(Object.keys(state.entities.boards)[0]);
  const boardId = ownProps.boardId;
  // debugger
  const board = state.entities.boards[boardId];
  // debugger;
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);