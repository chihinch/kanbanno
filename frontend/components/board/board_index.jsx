import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class BoardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const boardItems = this.props.boards.map((board) => {
      // Special thanks to Mike Grace and Maxim Firsoff at 
      // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
      // for this regex to strip punctuation in the board's title

      // and to jolyonruss and CMS for how to 'dashify' a string and make it lowercase
      // https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case
      const formattedTitle = board.title.replace(/[., \/#!$%\^&*;:{}=\-_`~()\?@<>"[\]'\\|+]/g, " ").replace(/\s{2,}/g, " ").replace(/\s+/g, '-').toLowerCase();
      return (
        <li className="board-list-item" key={board.id}>
          <Link to={`/boards/${board.id}/${formattedTitle}`}></Link>
        </li>
      )
    })

    return (
      <div className="board-index-view">
        <div className="board-index-container">
          <div className="personal-boards-section">
            <div className="personal-boards-section-header">
              <span><FontAwesomeIcon icon={faUser} /></span>
              <h3>Personal Boards</h3>
            </div>
            <div className="personal-boards-list">
              <ul>
                {boardItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}