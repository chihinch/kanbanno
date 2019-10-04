import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ currentUser, logout }) => {
  return (<>
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-button">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="#" className="navbar-button long-button">
          <FontAwesomeIcon icon={faChalkboard} />
          Boards
        </Link>
        <form className="navbar-search">
          <input type="text" placeholder="Search" />
          <Link to="#"><FontAwesomeIcon icon={faSearch} /></Link>
        </form>
      </div>

      <Link to="/" className="navbar-logo">
        Kanbanno
      </Link>

      <div className="navbar-right">
        <Link to="#" onClick={logout} className="navbar-button long-button">
          <FontAwesomeIcon icon={faDoorOpen} />
          Log Out
        </Link>
      </div>
    </div>

    <div className="app-main-interface">
      <p>
        Welcome, {currentUser.name}
        <br/>
        {currentUser.email}
        <br/><br/>
        You should see this if you're logged in!
        <br/>
        Board index UI will go here.
        <br/>
        Click on the button on the top-right to logout.
        <br/>
        Thanks for visiting!
      </p>
    </div>
  </>);
};

export default Navbar;