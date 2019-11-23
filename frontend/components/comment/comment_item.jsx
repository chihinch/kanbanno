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
    this.state = {
      body: props.comment.body,
    };
  }

  render() {
    return (
      <li className="comment-item">
        {this.state.body}
      </li>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
