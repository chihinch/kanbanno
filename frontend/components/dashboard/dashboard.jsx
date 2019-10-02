// This is the dashboard presentational component

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ currentUser, logout }) => {
  return (
    <div id="navbar">
      <h1>Kanbanno</h1>
      <h2>You should see this if you're logged in</h2>
      <h2>Current User: {currentUser.name}</h2>

      {/* Will also have a logo enclosed in an <a> tag go back to root */}
      <div className="dashboard-session-buttons">
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;