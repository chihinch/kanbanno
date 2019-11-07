import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  const nullBoard = {
    id: null,
    title: '',
    description: '',
    admin_id: null,
    archived: false,
    member_ids: [],
  }
  const board = state.entities.boards[boardId] || nullBoard;
  return {
    boardId,
    board,
    currentUser: state.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);