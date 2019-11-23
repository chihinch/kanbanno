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
    const created = new Date(this.props.comment.created_at);
    const updated = new Date(this.props.comment.updated_at);
    const elapsed = created - updated;

    const readableUpdated = updated.toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    const edited = elapsed > 1000 ? "(edited)" : ""
    const dateShown = readableUpdated + edited;

    return (
      <li className="comment-list-item">
        <div className="comment-item-container">
          <div className="comment-item-header">
            <span id="comment-item-author">{this.props.author}</span>
            <span id="comment-item-updatedat">{dateShown}</span>
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
