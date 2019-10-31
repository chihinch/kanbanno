import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id]),
    boardId: parseInt(ownProps.match.params.boardId)
  };
};

export default withRouter(connect(mapStateToProps, null)(ListIndex));

// const mapStateToProps = (ownProps) => {
//   debugger
//   return {
//     boardId: parseInt(ownProps.match.params.boardId)
//   }
// };