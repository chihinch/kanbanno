import { connect } from 'react-redux';

import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardIndex from './board_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    boards: Object.keys(state.entities.boards).map((id) => state.entities.boards[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    openNewBoardModal: () => dispatch(openModal('newBoard'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);