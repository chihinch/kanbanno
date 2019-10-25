import { connect } from 'react-redux';

// import { fetchLists } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {
  // const boardId = parseInt(ownProps.match.params.boardId);
  return {
    lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchLists: () => dispatch(fetchLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);