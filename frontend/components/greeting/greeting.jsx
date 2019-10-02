// This is the Greeting presentational component

import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser }) => {
  return (
    <header id="greeting-header">
      <h1>You should see this if you're not logged in</h1>
      <div>Kanbanno</div>
      
      {/* Will also have a logo enclosed in an <a> tag go back to root */}
      <div className='greeting-session-buttons'>
        <Link to="/login" className='greeting-session-button'>Log In</Link>
        <Link to="/signup" className='greeting-session-button'>Sign Up</Link>
      </div>
    </header>
  );
};

export default Greeting;