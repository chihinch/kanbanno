import { connect } from 'react-redux';
import React from 'react';

import { closeMenu } from '../../actions/menu_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

const mapStateToProps = (state, ownProps) => {
  return {
    members: Object.values(state.users),
    currentUser: state.session.id,
    adminId: state.entities.boards[ownProps.boardId].admin_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(closeMenu())
  };
};

class MembersMenu extends React.Component {
  constructor(props) {
    super(props)
    this.listMembers = this.listMembers.bind(this);
  }

  componentDidMount() {
    // const permissionButton = document.getElementById("permission");
    // debugger
    // const permissionButtonLocation = permissionButton.getBoundingClientRect();
    // debugger
    // this.divRef.style.left = `${permissionButtonLocation.left}px;`;
    // debugger
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  listMembers() {
    const memberList = this.props.members.map((member) => {
      const adminText = this.props.adminId === member.id ? ' (Admin)' : '';
        return (
          <li key={`user_${member.id}`}>
            <p>{member.name}{adminText}</p>
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
    const permissionButton = document.getElementById("permission");
    const permissionButtonLocation = permissionButton.getBoundingClientRect();
    const containerLeft = permissionButtonLocation.left;

    const boardMembersContainer = 
      (<div className="board-members-container" style={{left: containerLeft + 'px'}}>
        <div className="board-members-header">
          <span className="board-members-title">Board Members</span>
          <button className="menu-close" onClick={this.props.closeMenu}><span><FontAwesomeIcon icon={faTimes} /></span></button>
        </div>
        <div className="board-members-list">
          {this.listMembers()}
        </div>
      </div>);

    return boardMembersContainer;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(MembersMenu));