import { connect } from 'react-redux';

import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
  return {
    comments: state.entities.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);