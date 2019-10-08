import React from 'react';
import { withRouter } from 'react-router';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      submitDisabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, {title: this.state.title, description: this.state.description});
    // debugger
    this.props.createBoard(board).then((result) => {
      // debugger
      this.props.closeModal();
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
      if (this.state.title.length > 1) {
        this.setState({ submitDisabled: false });
      } else {
        this.setState({ submitDisabled: true });
      }
    };
  }

  render() {
    return (
      <div>
        <form className="create-board-form">
          <div className="create-board-form-inputs">
            <input type="text" 
              value={this.state.title}
              onChange={this.update('title')}
              className="create-board-title"
              placeholder="Add board title"
            />

            <textarea
              onChange={this.update('description')}
              className="create-board-description"
              placeholder="Description (optional)" 
              // cols="30" rows="10"
              value={this.state.description}
            >
            </textarea>
          </div>
          <button type="submit" className="create-board-submit" disabled={this.state.submitDisabled} onClick={this.handleSubmit}>
            <span>Create Board</span>
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(BoardForm);