import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { openMenu } from '../../actions/menu_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  const board = state.entities.boards[boardId];
  return {
    boardId,
    board,
    currentUser: state.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
    openMembersMenu: () => dispatch(openMenu('membersMenu')),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);