import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class NavAccountMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="account-menu-container">
        <div className="account-menu name">
          <span className="account-name">
            {this.props.currentUser.name} ({this.props.currentUser.email})
          </span>
          <button className="menu-close">
            <span><FontAwesomeIcon icon={faTimes} /></span>
          </button>
        </div>
        <div className="account-menu options">
          <nav>
            <ul>
              <li><Link to="#">Option #1</Link></li>
              <li><Link to="#">Option #2</Link></li>
              <li><Link to="#">Option #3</Link></li>
              <li class="with-bottom-divider"><Link to="#">Option #4</Link></li>
              <li><button onClick={this.props.logout} id="logout-button">Log Out</button></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}