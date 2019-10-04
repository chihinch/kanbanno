import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

  render () {
    return (
    <footer>
      <ul>
        <li key="footer-li-1"><Link to="#" onClick={this.props.demoLogin}>Tour</Link></li>
        <li key="footer-li-2"><Link to="#">Pricing</Link></li>
        <li key="footer-li-3"><Link to="#">Apps</Link></li>
        <li key="footer-li-4"><Link to="#">Jobs</Link></li>
        <li key="footer-li-5"><Link to="#">Blog</Link></li>
        <li key="footer-li-6"><Link to="#">Developers</Link></li>
        <li key="footer-li-7"><Link to="#">About</Link></li>
        <li key="footer-li-8"><Link to="#">Help</Link></li>
        <li key="footer-li-9"><Link to="#">Legal</Link></li>
        <li key="footer-li-10"><Link to="#">Cookie Settings</Link></li>
        <li key="footer-li-11"><Link to="#">Privacy</Link></li>
      </ul>

      <h1>Kanbanno</h1>
    </footer>
    );
  }
}