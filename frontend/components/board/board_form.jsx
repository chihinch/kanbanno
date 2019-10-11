import React from 'react';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.board.title,
      description: this.props.board.description
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let board;
    if (this.props.formType === 'newBoard') {
      board = Object.assign({}, {title: this.state.title, description: this.state.description});
    } else {
      board = Object.assign({}, { title: this.state.title, description: this.state.description, id: this.props.board.id });
    }
    this.props.action(board).then(() => {
      this.props.closeModal();
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.deleteBoard(this.props.board.id).then(() => {
      this.props.history.push('/boards');
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    let deleteButton;
    if (this.props.formType === 'updateBoard') {
      deleteButton = <button className="board-delete-button" onClick={this.handleDelete} >Delete Board</button>
    } else {
      deleteButton = null;
    }
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

          <div className="board-form-buttons">
            <input type="submit" 
              className="board-input-submit" 
              disabled={!this.state.title}
              value={this.props.formType === 'newBoard' ? 'Create Board' : 'Save'}
            />

            {deleteButton}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(BoardForm);