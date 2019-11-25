import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../footer/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlingBall, faCandyCane, faCheese, faHippo, faMeteor, 
  faPersonBooth, faSatellite, faShieldAlt, faWind, faTshirt } from '@fortawesome/free-solid-svg-icons';

export default class Splash extends React.Component {
  
  render() {
    return (<>
      <header className="splash-navbar-container">
        <nav className="splash-navbar">
          <Link to="/" className="splash logo">
            Kanbanno
          </Link>
          <div className="splash-navbar-buttons">
            <Link to="/login" className="splash-link-button">Log In</Link>
            <Link to="/signup" className="splash-white-button " id="signup">Sign Up</Link>
            <Link to="/" className="splash-white-button" onClick={this.props.demoLogin}>Demo</Link>
          </div>
        </nav>
      </header>

      <section id="splash-1" className="splash-section">
        <div id="splash-1-container" className="splash-container">
          <div>
            <div className="splash-1-pitch">
              <h1>
                Kanbanno helps you streamline your workflow and get stuff done.
              </h1>
              <p>
                Kanbanno's boards, lists, and cards provide an intuitive system to organize your tasks and reduce your headaches.
              </p>
            </div>

            <div className="splash-img">
              <img src="https://cdn.pixabay.com/photo/2019/03/12/20/27/kanban-4051777_960_720.jpg" alt="kanban-example" />
            </div>
          </div>

          <div className="splash-1-buttons">
            <Link to="/signup" className="splash-1-button">Sign Up - It's Free!</Link>
            <Link to="/" className="splash-1-button" onClick={this.props.demoLogin}>Try a Demo!</Link>
          </div>

        </div>
      </section>

      <section id="splash-2" className="splash-section">
        <div className="splash-container minor">
          <div>
            <div className="splash-minor-pitch left">
              <h3>Work with any team</h3>
              <p>Stay on the same page as your team from anywhere: at work, at home, or in a subway train delayed due to "train traffic."</p>
              <Link to="/signup" className="splash-button grey">Start doing →</Link>
            </div>

            <div className="splash-img minor right">
              <img src="https://cdn.pixabay.com/photo/2019/02/04/08/27/pixel-cells-3974170_960_720.png" alt="teamwork"/>
            </div>
          </div>
        </div>
      </section>

      <section id="splash-3" className="splash-section">
        <div className="splash-container minor right">
          <div>
            <div className="splash-img minor left">
              <img src="https://cdn.pixabay.com/photo/2018/09/26/09/13/pixel-cells-3704047_960_720.png" alt="info-at-a-glance" />
            </div>

            <div className="splash-minor-pitch right">
              <h3>Information at a glance</h3>
              <p>Dive into the details by adding comments, attachments, due dates, and more directly to Kanbanno cards. Collaborate on projects from beginning to end.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="splash-bottom">
        <section id="splash-bottom-companies">
          <div className="splash-container bottom">
            <div id="companies-inner">
              <h3>Achieve synergy with Kanbanno</h3>
              <p>All sorts of fictional companies use Kanbanno.</p>
              <div id="logo-container">
                <FontAwesomeIcon icon={faBowlingBall} key={`bowlingBall`} />
                <FontAwesomeIcon icon={faCandyCane} key={`candyCane`} />
                <FontAwesomeIcon icon={faCheese} key={`cheese`} />
                <FontAwesomeIcon icon={faHippo} key={`hippo`} />
                <FontAwesomeIcon icon={faMeteor} key={`meteor`} />
                <FontAwesomeIcon icon={faPersonBooth} key={`personBooth`} />
                <FontAwesomeIcon icon={faSatellite} key={`satellite`} />
                <FontAwesomeIcon icon={faShieldAlt} key={`shieldAlt`} />
                <FontAwesomeIcon icon={faTshirt} key={`tShirt`} />
                <FontAwesomeIcon icon={faWind} key={`wind`} />
              </div>
              <div id="companies-button">
                <Link to="#" onClick={this.props.demoLogin} className="splash-button purple">See why →</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="splash-bottom-join">
          <div className="splash-container">
            <div id="start-planning">
              <div className="start-planning-contents">
                <h3>Start Planning Today</h3>
                <p>Sign up and become one of the dozens of living beings in our solar system using Kanbanno to get more done.</p>
                <Link to="/signup" className="splash-1-button" id="sign-up-button-bottom">Get Started - It's Free!</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>);
  }
};