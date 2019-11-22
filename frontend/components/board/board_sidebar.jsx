import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';

import { openModal } from '../../actions/modal_actions';
import { openMenu } from '../../actions/menu_actions';
import { fetchBoard } from '../../actions/board_actions';
import { deleteMembership } from '../../actions/membership_actions';

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
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    deleteMembership: (membership) => dispatch(deleteMembership(membership))
  };
};

class BoardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.closeBoardSidebar = this.closeBoardSidebar.bind(this);
    // this.handleDeleteMembership = this.handleDeleteMembership.bind(this);
    this.listMembers = this.listMembers.bind(this);
  }

  closeBoardSidebar() {
    document.getElementById("board-sidebar").style.width = "0";
    document.getElementById("board-show-container").style.width = "100%";
  }

  // handleDeleteMembership(e) {
  //   e.preventDefault();
  //   const membership = { board_id: this.props.boardId, member_id: parseInt(e.target.dataset.member) };
  //   // debugger
  //   this.props.deleteMembership(membership);
  // }

  listMembers() {
    const memberList = this.props.members.map((member) => {
      const adminText = this.props.adminId === member.id ? ' (Admin)' : '';
      const membership = { board_id: this.props.boardId, member_id: member.id };
      const deleteIcon = this.props.currentUser === this.props.adminId && this.props.adminId !== member.id ? 
        <FontAwesomeIcon icon={faUserMinus} /> : null;
      return (
        <li key={`user_${member.id}`}>
          <p>{member.name}{adminText}</p>
          <span 
            className="delete-member-icon" 
            onClick={() => this.props.deleteMembership(membership).then((message) => {
              if (message.membershipMessage[0] === "User successfully removed from this board.") {
                this.props.fetchBoard(this.props.boardId);
              }
            })}
          >
            {deleteIcon}
          </span>
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