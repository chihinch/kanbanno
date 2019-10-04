import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ currentUser, logout }) => {
  return (<>
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-button">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="#" className="navbar-button" id="board-button">
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
        <h1>Hi, this is the right side</h1>
      </div>
    </div>

    <div className="app-main-interface">
      You should see this if you're logged in!
      <br/>
      Board index UI will go here.
      <br/>
      Click on your initials on the top-right to logout.
    </div>

    <br/>

    <footer>
      <h1>Welcome, {currentUser.name}</h1>
      <button id="logout-button" onClick={logout}>Logout</button>
    </footer>
  </>);
};

export default Navbar;