import React from 'react';
import { connect } from 'react-redux';

import onClickOutside from 'react-onclickoutside';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin, faTrello } from '@fortawesome/free-brands-svg-icons';

import { closeMenu } from '../../actions/menu_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(closeMenu()),
    logout: () => dispatch(logout())
  };
};

class NavAccountMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    this.props.closeMenu();
    this.props.logout();
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  render() {
    return (
      <div className="account-menu-container">
        <div className="account-menu name">
          <span className="account-name">
            {this.props.currentUser.name} ({this.props.currentUser.email})
          </span>
          <button className="menu-close" onClick={this.props.closeMenu}>
            <span><FontAwesomeIcon icon={faTimes} /></span>
          </button>
        </div>
        <div className="account-menu options">
          <nav>
            <ul>
              <li>
                <a href="https://dannychan.dev" target="_blank">
                  <FontAwesomeIcon icon={faIdBadge} />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/chihinch/kanbanno" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </a>
                </li>
              <li>
                <a href="https://linkedin.com/in/chihinchan" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
              </li>
              <li className="with-bottom-divider">
                <a href="https://angel.co/chihinch" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
                  AngelList
                  </a>
              </li>
              <li className="with-bottom-divider">
                <a href="https://trello.com" target="_blank">
                  <FontAwesomeIcon icon={faTrello} />
                  Inspired by Trello
                  </a>
              </li>
              <li><button onClick={this.handleLogout} id="logout-button">Log Out</button></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(NavAccountMenu));