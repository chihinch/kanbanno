import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

export default class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.constructBoards = this.constructBoards.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  constructBoards(type) {
    let selectedBoards;
    if (type === 'personal') {
      selectedBoards = this.props.boards.filter((board) => board.members.length === 1);
    }
    else if (type === 'shared') {
      selectedBoards = this.props.boards.filter((board) => board.members.length > 1)
    }

    const newBoardTile = type === 'personal' ? 
      <li className="board-list-item" key="create-board-li" id="create-board-li" onClick={this.props.openNewBoardModal}>
        <div><span>Create new board</span></div>
      </li> : null;

    const boardItems = selectedBoards.map((board) => {
      return (
        <li className="board-list-item" key={`board-index-${board.id}`}>
          <Link to={`/boards/${board.id}`}>{board.title}</Link>
        </li>
      );
    });

    return (
      <ul className="boards-list">
        {boardItems}
        {newBoardTile}
      </ul>
    );
  }

  render() {
    return (
      <div className="board-index-view">
        <div className="board-index-container">
          <div className="boards-section" id="personal-boards">
            <div className="boards-section-header">
              <span className="boards-section-icon"><FontAwesomeIcon icon={faUser} /></span>
              <h3>Personal Boards</h3>
            </div>
            {this.constructBoards('personal')}
          </div>

          <div className="boards-section" id="shared-boards">
            <div className="boards-section-header">
              <span className="boards-section-icon"><FontAwesomeIcon icon={faUsers} /></span>
              <h3>Shared Boards</h3>
            </div>
            {this.constructBoards('shared')}
          </div>
        </div>
      </div>
    );
  }
}