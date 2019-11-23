import React from 'react';

import CommentItem from './comment_item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {
    const commentsList = Object.values(this.props.comments).map((comment) => {
      return (
        <CommentItem commentId={comment.id} key={`comment-${comment.id}`} />
      );
    })

    return (
      <ul className="card-comments-list">
        {commentsList}
      </ul>
    );
  }

  render() {
    return (
      <div className="card-section-container">
        <div className="card-section-header" id="card-comments">
          <span className="card-large-icon"><FontAwesomeIcon icon={faComments} /></span>
          <h3>Comments</h3>
        </div>
        {this.renderComments()}
      </div>
    );
  }
};