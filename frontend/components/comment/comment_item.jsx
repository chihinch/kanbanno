import { connect } from 'react-redux';
import React from 'react';

import { updateComment, deleteComment } from '../../actions/comment_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.commentId];
  const author = state.users[comment.author_id];
  const currentUserId = state.session.id;
  return {
    comment,
    author,
    currentUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.comment.body,
      showComment: true,
    };
    this.update = this.update.bind(this);
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
      this.setHeightOfTextarea(e.target);
    };
  }

  setHeightOfTextarea(element) {
    element.style.height = 'inherit';
    element.style.height = element.scrollHeight + 'px';
  }

  toggleEdit() {
    this.setState({ showComment: !this.state.showComment });
  }

  handleUpdate() {
    const comment = Object.assign({}, { body: this.state.body, id: this.props.comment.id });
    this.props.updateComment(comment).then(() => this.toggleEdit());
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const created = new Date(this.props.comment.created_at);
    const updated = new Date(this.props.comment.updated_at);
    const elapsed = updated - created;
    const readableUpdated = updated.toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    const edited = elapsed > 1000 ? "(edited)" : "";
    const dateShown = readableUpdated + ' ' + edited;

    const commentP = <div className="comment-item-body"><p>{this.state.body}</p></div>;

    const commentEdit =
      <form className="comment-form" id="comment-editor" onSubmit={this.handleUpdate}>
        <textarea className="comment-body-input" value={this.state.body} onChange={this.update('body')}></textarea>
        <input type="submit" className="comment-input-submit" value="Save" disabled={!this.state.body} />
        <span onClick={this.toggleEdit}><FontAwesomeIcon icon={faTimes} /></span>
      </form>;

    const editEl = (this.props.currentUserId === this.props.author.id) 
      ? <a className="comment-item-a" id="comment-edit" onClick={this.toggleEdit}>Edit</a>
      : null;

    const deleteEl = (this.props.currentUserId === this.props.author.id) 
      ? <a className="comment-item-a" id="comment-delete" onClick={this.handleDelete}>Delete</a> 
      : null;

    return (
      <li className="comment-list-item">
        <div className="comment-item-container">
          <div className="comment-item-header">
            <span id="comment-item-author">{this.props.author.name}</span>
            <span id="comment-item-updatedat">{dateShown}</span>
          </div>
          {this.state.showComment ? commentP : commentEdit}
          <div>
            {editEl}
            {deleteEl}
          </div>
        </div>
      </li>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
