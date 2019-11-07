import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchLists } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {
  const lists = Object.values(state.entities.lists);
  const boardId = parseInt(ownProps.match.params.boardId);
  debugger
  return {
    lists,
    boardId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: (boardId) => dispatch(fetchLists(boardId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));