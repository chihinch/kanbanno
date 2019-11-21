import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';

import { openModal } from '../../actions/modal_actions';
import { openMenu } from '../../actions/menu_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  return {
    boardId,
    members: Object.values(state.users),
    currentUser: state.session.id,
    adminId: state.entities.boards[boardId].admin_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
    openMenu: (type, id) => dispatch(openMenu(type, id)),
  };
};

class BoardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.closeBoardSidebar = this.closeBoardSidebar.bind(this);
    this.listMembers = this.listMembers.bind(this);
  }

  closeBoardSidebar() {
    document.getElementById("board-sidebar").style.width = "0";
    document.getElementById("board-show-container").style.width = "100%";
  }

  listMembers() {
    const memberList = this.props.members.map((member) => {
      const adminText = this.props.adminId === member.id ? ' (Admin)' : '';
      const deleteIcon = this.props.currentUser === this.props.adminId && this.props.adminId !== member.id ? 
        <FontAwesomeIcon icon={faUserMinus} /> : null;
      return (
        <li key={`user_${member.id}`}>
          <p>{member.name}{adminText}</p>
          <span className="delete-member-icon">{deleteIcon}</span>
        </li>
      );
    });

    return (
      <ul>
        {memberList}
      </ul>
    );
  }

  render() {
    return (
      <div className="board-sidebar" id="board-sidebar">
        <div className="board-sidebar-header">
          <span className="board-sidebar-title">Menu</span>
          <span id="sidebar-menu-close" onClick={this.closeBoardSidebar}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="board-sidebar-content">
          <div className="board-sidebar-options">
            <a to="#" className="board-sidebar-option" id="sidebar-edit" onClick={() => this.props.openUpdateBoardModal(this.props.boardId)}>
              <span><FontAwesomeIcon icon={faBars} /></span>
              Edit Board
            </a>
            <a to="#" className="board-sidebar-option" id="sidebar-edit" onClick={() => this.props.openMenu('membershipFormMenu', this.props.boardId)}>
              <span><FontAwesomeIcon icon={faUserPlus} /></span>
              Add a Member
            </a>
            <div className="board-sidebar-members">
              <span className="board-members-title">Board Members</span>
              {this.listMembers()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardSidebar));