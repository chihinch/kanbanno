import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  let boardId = ownProps.match.params.boardId;
  return {
    board: state.entities.boards[boardId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoard: (id) => dispatch(fetchBoard(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);