import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  const board = state.entities.boards[boardId];
  const members = board ? Object.values(state.users) : [];
  return {
    boardId,
    board,
    currentUser: state.users[state.session.id],
    members,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);