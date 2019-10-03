import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  return (<>
    <div className="navbar">
      <div className="navbar-left">
        <h1>Hi, this is the left side</h1>
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
      Hover over icon on the top-right to logout.
    </div>

    <br/>

    <footer>
      <h1>Welcome, {currentUser.name}</h1>
      <button id="logout-button" onClick={logout}>Logout</button>
    </footer>
  </>);
};

export default Navbar;