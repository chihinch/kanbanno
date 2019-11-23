import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.commentId];
  const author = state.users[comment.author_id].name;
  return {
    comment,
    author,
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
      <li className="comment-list-item">
        <div className="comment-item-container">
          <div className="comment-item-header">
            <span>{this.props.author}</span>
          </div>
          <div className="comment-item-body">
            <p>{this.state.body}</p>
          </div>
        </div>
      </li>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
