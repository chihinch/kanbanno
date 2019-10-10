import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch, faDoorOpen, faPlus, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default class Navbar extends React.Component {
  render() {
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
          <button className="navbar-button" onClick={this.props.openNewBoardModal}>
            <span><FontAwesomeIcon icon={faPlus} /></span>
          </button>
          <button className="navbar-button">
            <span><FontAwesomeIcon icon={faInfoCircle} /></span>
          </button>
          <button className="navbar-button">
            <span><FontAwesomeIcon icon={faBell} /></span>
          </button>
          <button onClick={this.props.openAccountMenu} className="navbar-button long-button" id="logout-button">
            <FontAwesomeIcon icon={faDoorOpen} />
            Log Out
          </button>
        </div>
      </div>
    </>);
  }
}