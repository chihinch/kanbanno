import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch, faDoorOpen, faPlus, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';

import NavAccountMenu from './nav_account_menu';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      currentMenu: null,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: true,
      currentMenu: e.target.id,
    }, document.addEventListener('click', this.closeMenu));
  }

  closeMenu() {
    this.setState({
      showMenu: false,
      currentMenu: null,
    }, document.removeEventListener('click', this.closeMenu));
  };

  render() {
    let shownMenu;
    if (this.state.showMenu) {
      switch (this.state.currentMenu) {
        case "logout-button":
          shownMenu = <NavAccountMenu currentUser={this.props.currentUser} logout={this.props.logout} />
        default:
          null
      }
    }
    return (<>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-button">
            <span><FontAwesomeIcon icon={faHome} /></span>
          </Link>
          <button className="navbar-button long-button">
            <span><FontAwesomeIcon icon={faChalkboard} /></span>
            <span>Boards</span>
          </button>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
            <span><button class="navbar-button"><FontAwesomeIcon icon={faSearch} /></button></span>
          </div>
        </div>

        <Link to="/" className="navbar logo">
          Kanbanno
        </Link>

        <div className="navbar-right">
          <button className="navbar-button">
            <span><FontAwesomeIcon icon={faPlus} /></span>
          </button>
          <button className="navbar-button">
            <span><FontAwesomeIcon icon={faInfoCircle} /></span>
          </button>
          <button className="navbar-button">
            <span><FontAwesomeIcon icon={faBell} /></span>
          </button>
          <button onClick={this.showMenu} className="navbar-button long-button" id="logout-button">
            <FontAwesomeIcon icon={faDoorOpen} />
            Log Out
          </button>
        </div>
      </div>

      {shownMenu}

      <div className="app-main-interface">
        <p>
          Welcome, {this.props.currentUser.name}
          <br/>
          {this.props.currentUser.email}
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
  }
};