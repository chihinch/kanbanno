import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
    comment: state.entities.comments[ownProps.commentId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
