import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderBoards = this.renderBoards.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  renderBoards() {
    const boardItems = this.props.boards.map((board) => {
      // Special thanks to Mike Grace and Maxim Firsoff at 
      // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
      // for this regex to strip punctuation in the board's title

      // and to jolyonruss and CMS for how to 'dashify' a string and make it lowercase
      // https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case
      const formattedTitle = board.title.replace(/[., \/#!$%\^&*;:{}=\-_`~()\?@<>"[\]'\\|+]/g, " ").replace(/\s{2,}/g, " ").replace(/\s+/g, '-').toLowerCase();
      return (
        <li className="board-list-item" key={board.id}>
          <Link to={`/boards/${board.id}/${formattedTitle}`}>{board.title}</Link>
        </li>
      );
    });

    // Append a createNewBoard list item to the boardItems, and return the ul
    return (
      <ul className="boards-list">
        {boardItems}
        <li className="board-list-item" key="create-board-li" id="create-board-li">
          <div><span>Create new board</span></div>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="board-index-view">
        <div className="board-index-container">
          <div className="personal-boards-section">
            <div className="personal-boards-section-header">
              <div><span><FontAwesomeIcon icon={faUser} /></span></div>
              <h3>Personal Boards</h3>
            </div>
            {this.renderBoards()}
          </div>
        </div>
      </div>
    );
  }
}