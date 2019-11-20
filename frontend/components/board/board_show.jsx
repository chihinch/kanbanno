import React from 'react';
import { withRouter } from 'react-router';

import BoardTitle from './board_title';
import ListIndexContainer from '../list/list_index_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBars, faLock, faUsers, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boardId !== this.props.boardId) {
      this.props.fetchBoard(this.props.boardId);
    }
  }
  
  render() {
    if (!this.props.board) {
      return null;
    }

    const nameToArray = this.props.currentUser.name.split(" ");
    const firstInitial = nameToArray[0].slice(0, 1);
    const lastInitial = nameToArray[nameToArray.length - 1].slice(0, 1);
    const initials = firstInitial + lastInitial;

    return (
      <div className="board-show-container">
        <div className="board-show-header">
          <BoardTitle title={this.props.board.title} boardId={this.props.boardId} />

          <a to="#" className="board-header-button" id="star">
            <span><FontAwesomeIcon icon={faStar} /></span>
          </a>

          <div className="board-header-buttons left">
            <a to="#" className="board-header-button" id="edit" onClick={() => this.props.openUpdateBoardModal(this.props.boardId)}>
              <span><FontAwesomeIcon icon={faBars} /></span>
            </a>

            <span className="board-header-divider"></span>

            <a to="#" className="board-header-button" id="permission" onClick={this.props.openMembersMenu}>
              <span id="permission-icon"><FontAwesomeIcon icon={faLock} /></span>
              <span id="permission-text">Private</span>
            </a>
          </div>
            
          <span className="board-header-divider"></span>

          <div className="board-header-buttons left">
            <div className="board-header-avatar">
              <span id="avatar-initials">
                {initials}
              </span>
            </div>
            <a to="#" className="board-header-button" id="invite">
              Invite
            </a>
          </div>

          <div className="board-header-buttons right">
            <a to="#" className="board-header-button" id="menu" onClick = {() => this.props.openUpdateBoardModal(this.props.boardId)}>
              <span id="menu-icon"><FontAwesomeIcon icon={faEllipsisH} /></span>
              <span id="menu-text">Show Menu</span>
            </a>
          </div>

        </div>

        <ListIndexContainer />
        <div>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardShow);