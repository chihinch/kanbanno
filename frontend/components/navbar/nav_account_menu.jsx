import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

function NavAccountMenu({ currentUser, closeMenu, logout }) {

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <div className="account-menu-container" onClick={(e) => e.stopPropagation()}>
      <div className="account-menu name">
        <span className="account-name">
          {currentUser.name} ({currentUser.email})
        </span>
        <button className="menu-close" onClick={closeMenu}>
          <span><FontAwesomeIcon icon={faTimes} /></span>
        </button>
      </div>
      <div className="account-menu options">
        <nav>
          <ul>
            <li><Link to="#">Option #1</Link></li>
            <li><Link to="#">Option #2</Link></li>
            <li><Link to="#">Option #3</Link></li>
            <li className="with-bottom-divider"><Link to="#">Option #4</Link></li>
            <li><button onClick={handleLogout} id="logout-button">Log Out</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavAccountMenu);