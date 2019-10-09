import React from 'react';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
    this.props.createBoard(board).then((result) => {
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
      <div className="board-form-container">
        <form className="board-form" onSubmit={this.handleSubmit}>
          <div className="board-form-inputs">
            <div id="title-with-close">
              <input type="text" 
                value={this.state.title}
                onChange={this.update('title')}
                className="board-input-title"
                placeholder="Add board title"
              />
              <span onClick={this.props.closeModal}><FontAwesomeIcon icon={faTimes} /></span>
            </div>

            <textarea
              onChange={this.update('description')}
              className="board-input-description"
              placeholder="Description (optional)" 
              value={this.state.description}
            >
            </textarea>
          </div>

          <input type="submit" 
            className="board-input-submit" 
            disabled={!this.state.title}
            value="Create Board"
          />
        </form>
      </div>
    )
  }
}

export default withRouter(BoardForm);