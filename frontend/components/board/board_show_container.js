import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { clearLists } from '../../actions/list_actions';
import { clearCards } from '../../actions/card_actions';
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
    openMenu: (type, id) => dispatch(openMenu(type, id)),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    clearLists: () => dispatch(clearLists()),
    clearCards: () => dispatch(clearCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);