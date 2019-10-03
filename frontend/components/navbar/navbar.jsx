import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  return (
    <div id="navbar">
      {/* Will also have a logo enclosed in an <a> tag go back to root */}
      <div className="dashboard-session-buttons">
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;