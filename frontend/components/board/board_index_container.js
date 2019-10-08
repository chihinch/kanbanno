import { connect } from 'react-redux';

import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mapStateToProps = (state) => {
  return {
    boards: Object.keys(state.entities.boards).map((id) => state.entities.boards[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);