import { connect } from 'react-redux';
import React from 'react';

import { closeMenu } from '../../actions/menu_actions';
import { createMembership } from '../../actions/membership_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

const mapDispatchToProps = (dispatch) => {
  return {
    createMembership: (membership) => dispatch(createMembership(membership)),
    closeMenu: () => dispatch(closeMenu())
  };
};

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const membership = Object.assign({}, { email: this.state.email, board_id: this.props.boardId })
    this.props.createMembership(membership);
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
        <div className="membership-form-content">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="email"
              value={this.state.email}
              className="membership-input-email"
              onChange={this.update('email')}
              placeholder="Email address"
            >
            </input>

            <input
              type="submit"
              value="Add Member"
              className="membership-input-submit" 
              disabled={!this.state.email}
            >
            </input>
          </form>
        </div>
      </div>);

    return membershipContainer;
  }
}

export default connect(null, mapDispatchToProps)(onClickOutside(MembershipForm));