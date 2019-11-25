import { connect } from 'react-redux';
import React from 'react';

import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  const authorId = state.session.id;
  return {
    authorId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.update = this.update.bind(this);
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, { author_id: this.props.authorId, card_id: this.props.cardId });
    this.props.createComment(comment)
      .then(() => this.setState({ body: "" }));
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea 
          className="comment-body-input"
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="Write a comment..."
        >
        </textarea>

        <input type="submit"
          value="Save"
          disabled={!this.state.body}
          className="comment-input-submit"
        />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);