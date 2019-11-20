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

  handleClickOutside() {
    this.props.closeMenu()
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
    return (
      <div className="board-members-container">
        {this.listMembers()}
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersMenu);