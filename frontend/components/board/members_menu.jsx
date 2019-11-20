import { connect } from 'react-redux';
import React from 'react';

import { closeMenu } from '../../actions/menu_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

const mapStateToProps = (state) => {
  return {
    users: state.users
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
  }

  handleClickOutside() {
    this.props.closeMenu()
  }  

  render() {
    return (
      <div className="board-members-container">
        Hello
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersMenu);

// listMembers() {
//   const memberList = this.props.members.map((member) => {
//     const adminText = this.props.currentUser.id === member.id ? ' (Admin)' : '';
//     return (
//       <li key={`user_${member.id}`}>
//         <p>{member.name}{adminText}</p>
//         <p>{member.email}</p>
//       </li>
//     )
//   });
//   return (
//     <ul>
//       {memberList}
//     </ul>
//   )
// }
