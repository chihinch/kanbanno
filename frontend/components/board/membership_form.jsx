import { connect } from 'react-redux';
import React from 'react';

import { closeMenu } from '../../actions/menu_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

// const mapStateToProps = (ownProps) => {
//   return {
//     boardId: parseInt(ownProps.match.params.boardId)
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(closeMenu())
  };
};

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  render() {
    const inviteButton = document.getElementById("invite");
    const inviteButtonLocation = inviteButton.getBoundingClientRect();
    const containerLeft = inviteButtonLocation.left;

    const membershipContainer = 
      (<div className="membership-form-container" style={{ left: containerLeft + 'px' }}>
        <div className="membership-form-header">
          <span className="membership-form-title">Add Member</span>
          <button className="menu-close" onClick={this.props.closeMenu}><span><FontAwesomeIcon icon={faTimes} /></span></button>
        </div>
      </div>);

    return membershipContainer;
  }
}

export default connect(null, mapDispatchToProps)(onClickOutside(MembershipForm));