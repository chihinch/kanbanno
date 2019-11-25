import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  const authorId = state.session.id;
  return {
    authorId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

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
    let comment;
    card = Object.assign({}, this.state, { author_id: this.props.authorId, card_id: this.props.cardId });
    // this.props.createCard(this.props.listId, card)
    //   .then(() => this.setState({ title: "" }));
  }

  render() {
    return (
      <form className="comment-form">
        <textarea 
          className="comment-body-input"
          value={this.state.title}
          onChange={this.update('body')}
          placeholder="Write a comment..."
        >
        </textarea>

        <input type="submit"
          value="Save"
          disabled={!this.state.title}
          className="comment-input-submit"
        />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);