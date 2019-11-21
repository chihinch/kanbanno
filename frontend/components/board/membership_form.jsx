import { connect } from 'react-redux';
import React from 'react';

import { fetchBoard } from '../../actions/board_actions';
import { closeMenu } from '../../actions/menu_actions';
import { createMembership, clearMessages } from '../../actions/membership_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

const mapStateToPRops = (state) => {
  return {
    messages: state.ui.membership
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMembership: (membership) => dispatch(createMembership(membership)),
    clearMessages: () => dispatch(clearMessages()),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
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
    this.renderMessages = this.renderMessages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearMessages();
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderMessages() {
    if (!this.props.messages) return null;
    const messageList = this.props.messages.map((message, idx) => {
      return (
        <p key={`membership-msg-${idx}`}>{message}</p>
      );
    });

    return (
      <div className="membership-message-container">
        {messageList}
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const membership = Object.assign({}, { email: this.state.email, board_id: this.props.boardId })
    this.props.createMembership(membership).then((message) => {
      if (message.membershipMessage[0] === "Member successfully added.") {
        this.props.fetchBoard(this.props.boardId);
      }
    });
    this.setState({email: ''});
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
        {this.renderMessages()}
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

export default connect(mapStateToPRops, mapDispatchToProps)(onClickOutside(MembershipForm));