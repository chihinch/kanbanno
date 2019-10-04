// This is the Splash presentational component

import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../footer/footer';

export default class Splash extends React.Component {
  
  render() {
    return (<>
      <header className="splash-header">
        <nav className="splash-navbar">
          <Link to="/" className="navbar-logo">
            Kanbanno
          </Link>

          <div className="splash-session-buttons">
            <Link to="/login" className="splash-login-button">Log In</Link>
            <Link to="/signup" className="splash-white-button " id="signup">Sign Up</Link>
            <Link to="/" className="splash-white-button" onClick={this.props.demoLogin}>Demo</Link>
          </div>
        </nav>
      </header>

      <section id="splash-1">
        <div id="splash-1-container" className="splash-container">
          <div>
            <div className="splash-1-pitch">
              <h1>
                Kanbanno helps you streamline your workflow and get stuff done.
              </h1>
              <p>
                Kanbanno's boards, lists, and cards provide an intuitive system to declutter your mind and organize your tasks.
              </p>
            </div>

            <div className="splash-1-img">
              <img src="https://cdn.pixabay.com/photo/2019/06/18/05/46/kanban-4281474_960_720.jpg" alt="kanban-example" />
            </div>
          </div>


          <div className="splash-1-buttons">
            <Link to="/signup" className="splash-1-button">Sign Up - It's Free!</Link>
            <Link to="/" className="splash-1-button" onClick={this.props.demoLogin}>See How It Works!</Link>
          </div>

        </div>
      </section>

      <section id="splash-2">
        <div id="splash-2-container" className="splash-container">
          <div>
            <div className="splash-2-pitch">
              <h3>Work with any team</h3>
              <p>Whether it's for work, a side project, or even the next family vacation, Kanbanno helps your team stay organized.</p>
              <Link to="/signup" className="grey-button">Start doing →</Link>
            </div>

            <div className="splash-2-img">
              <img src="https://cdn.pixabay.com/photo/2018/06/13/10/30/african-descent-3472462_960_720.jpg" alt="kanban-teamwork"/>
            </div>
          </div>
        </div>
      </section>

      <Footer demoLogin={this.props.demoLogin}/>
    </>);
  }
};