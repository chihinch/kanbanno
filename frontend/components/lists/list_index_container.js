import { connect } from 'react-redux';

import ListIndex from './list_index';

const mapStateToProps = (state) => {
  return {
    lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id])
  };
};

export default connect(mapStateToProps, null)(ListIndex);