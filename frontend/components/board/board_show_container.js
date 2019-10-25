import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { fetchLists } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  const nullBoard = {
    id: null,
    title: null,
    description: null,
    admin_id: null,
    archived: false,
    member_ids: [],
  }
  const board = state.entities.boards[boardId] || nullBoard;
  return {
    board,
    currentUser: state.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    fetchLists: () => dispatch(fetchLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);