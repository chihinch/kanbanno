import React from 'react';
import { withRouter } from 'react-router';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
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
    };
  }

  render() {
    return (
      <div>
        <form className="create-board-form" onSubmit={this.handleSubmit}>
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
              value={this.state.description}
            >
            </textarea>

            <input type="submit" 
              className="create-board-submit" 
              disabled={!this.state.title}
              value="Create Board"
            />

          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(BoardForm);