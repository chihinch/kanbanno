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
      currentMenuName: null,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: true,
      currentMenuName: e.target.id,
    }, document.addEventListener('click', this.closeMenu));
  }

  closeMenu() {
    this.setState({
      showMenu: false,
      currentMenuName: null,
    }, document.removeEventListener('click', this.closeMenu));
  }

  render() {
    let currentMenu;
    if (this.state.showMenu) {
      switch (this.state.currentMenuName) {
        case "logout-button":
          currentMenu = <NavAccountMenu currentUser={this.props.currentUser} logout={this.props.logout} />;
          break;
        default:
          currentMenu = null;
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
            <span><button className="navbar-button"><FontAwesomeIcon icon={faSearch} /></button></span>
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

      {currentMenu}
    </>);
  }
}