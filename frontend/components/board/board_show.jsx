import React from 'react';
import { withRouter } from 'react-router';

import BoardTitle from './board_title';
import ListIndexContainer from '../list/list_index_container';
import BoardSidebar from './board_sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBars, faLock, faUsers, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.openBoardSidebar = this.openBoardSidebar.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boardId !== this.props.boardId) {
      this.props.fetchBoard(this.props.boardId);
    }
  }

  openBoardSidebar() {
    document.getElementById("board-sidebar").style.width = "250px";
    document.getElementById("board-show-container").style.width = "calc(100% - 250px)";
  }
  
  render() {
    if (!this.props.board) {
      return null;
    }

    const nameToArray = this.props.currentUser.name.split(" ");
    const firstInitial = nameToArray[0].slice(0, 1);
    const lastInitial = nameToArray[nameToArray.length - 1].slice(0, 1);
    const initials = firstInitial + lastInitial;

    const permissionItems = this.props.board.members.length > 1 ? [faUsers, "Shared"] : [faLock, "Private"];

    return (<>
      <div className="board-show-container" id="board-show-container">
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

            <a to="#" className="board-header-button" id="permission" onClick={() => this.props.openMenu('membersMenu', this.props.boardId)}>
              <span id="permission-icon"><FontAwesomeIcon icon={permissionItems[0]} /></span>
              <span id="permission-text">{permissionItems[1]}</span>
            </a>
          </div>
            
          <span className="board-header-divider"></span>

          <div className="board-header-buttons left">
            <div className="board-header-avatar">
              <span id="avatar-initials">
                {initials}
              </span>
            </div>
            <a to="#" className="board-header-button" id="invite" onClick={() => this.props.openMenu('membershipFormMenu', this.props.boardId)}>
              Invite
            </a>
          </div>

          <div className="board-header-buttons right">
            {/* <a to="#" className="board-header-button" id="menu" onClick = {() => this.props.openUpdateBoardModal(this.props.boardId)}> */}
            <a to="#" className="board-header-button" id="menu" onClick = {this.openBoardSidebar}>
              <span id="menu-icon"><FontAwesomeIcon icon={faEllipsisH} /></span>
              <span id="menu-text">Show Menu</span>
            </a>
          </div>

        </div>

        <ListIndexContainer />
      </div>
      <BoardSidebar />
    </>)
  }
}

export default withRouter(BoardShow);