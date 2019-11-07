import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchLists } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id]),
    boardId: parseInt(ownProps.match.params.boardId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: (boardId) => dispatch(fetchLists(boardId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));