import React from 'react';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBars, faLock, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.board;
  }

  componentDidMount() {
    this.props.fetchBoard(parseInt(this.props.match.params.boardId));
  }

  static getDerivedStateFromProps(props, state) {
    if (props.board !== state) {
      return { 
        id: props.board.id,
        title: props.board.title,
        admin_id: props.board.admin_id,
        archived: props.board.archived,
      };
    }
    return null;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }
  
  render() {
    if (this.state.id == null) {
      return null;
    }

    const nameToArray = this.props.currentUser.name.split(" ");
    const firstInitial = nameToArray[0].slice(0, 1);
    const lastInitial = nameToArray[nameToArray.length - 1].slice(0, 1);
    const initials = firstInitial + lastInitial;

    return (
      <div className="board-show-container">
        <div className="board-show-header">
          <div className="board-show-title">
            <input type="text" 
              value={this.state.title} 
              size={this.state.title.length} 
              onChange={this.update('title')} />
          </div>

          <a to="#" className="board-header-button" id="star">
            <span><FontAwesomeIcon icon={faStar} /></span>
          </a>

          <div className="board-header-buttons left">
            <a to="#" className="board-header-button" id="edit" onClick={() => this.props.openUpdateBoardModal(this.state.id)}>

              {/* callback () => this.props....(this.props.board.id) */}
              <span><FontAwesomeIcon icon={faBars} /></span>
            </a>

            <span className="board-header-divider"></span>

            <a to="#" className="board-header-button" id="team">
              Personal
            </a>

            <span className="board-header-divider"></span>

            <a to="#" className="board-header-button" id="permission">
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
            <a to="#" className="board-header-button" id="menu" onClick = {() => this.props.openUpdateBoardModal(this.state.id)}>
              <span id="menu-icon"><FontAwesomeIcon icon={faEllipsisH} /></span>
              <span id="menu-text">Show Menu</span>
            </a>
          </div>

        </div>

        <div className="board-show-content">
          <h1>Lists go here!</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardShow);