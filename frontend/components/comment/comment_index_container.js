import { connect } from 'react-redux';

import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
  return {
    comments: state.entities.comments,
  };
};

export default connect(mapStateToProps, null)(CommentIndex);