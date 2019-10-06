import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch, faDoorOpen, faPlus, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ currentUser, logout }) => {
  return (<>
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-button">
          <span><FontAwesomeIcon icon={faHome} /></span>
        </Link>
        <Link to="#" className="navbar-button long-button">
          <span><FontAwesomeIcon icon={faChalkboard} /></span>
          <span>Boards</span>
        </Link>
        <form className="navbar-search">
          <input type="text" placeholder="Search" />
          <Link to="#"><FontAwesomeIcon icon={faSearch} /></Link>
        </form>
      </div>

      <Link to="/" className="navbar logo">
        Kanbanno
      </Link>

      <div className="navbar-right">
        <Link to="/" className="navbar-button">
          <span><FontAwesomeIcon icon={faPlus} /></span>
        </Link>
        <Link to="/" className="navbar-button">
          <span><FontAwesomeIcon icon={faInfoCircle} /></span>
        </Link>
        <Link to="/" className="navbar-button">
          <span><FontAwesomeIcon icon={faBell} /></span>
        </Link>
        <Link to="#" onClick={logout} className="navbar-button long-button" id="logout-button">
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