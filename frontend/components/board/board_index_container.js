import { connect } from 'react-router-dom';

import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mapStateToProps = (state) => {
  return {
    boards: state.entities.boards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);


