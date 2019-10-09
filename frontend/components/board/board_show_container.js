import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoard: (id) => dispatch(fetchBoard(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);