import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAngellist, faGithub, faLinkedin, faTrello } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {

  render () {
    return (
    <footer>
      <ul>
        <li key="footer-li-1"><a href="#" onClick={this.props.demoLogin}><FontAwesomeIcon icon={faDoorOpen} />Tour</a></li>
        <li key="footer-li-2"><a href="https://dannychan.dev"><FontAwesomeIcon icon={faIdBadge} />Portfolio</a></li>
        <li key="footer-li-3"><a href="https://github.com/chihinch/kanbanno"><FontAwesomeIcon icon={faGithub} />GitHub</a></li>
        <li key="footer-li-4"><a href="https://linkedin.com/in/chihinchan"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
        <li key="footer-li-5"><a href="https://angel.co/chihinch"><FontAwesomeIcon icon={faAngellist} />AngelList</a></li>
        <li key="footer-li-6"><a href="mailto:chihinch@outlook.com"><FontAwesomeIcon icon={faEnvelope} />Email Me</a></li>
      </ul>

      <div>
        <h1>Kanbanno by Danny Chan</h1>
        <a href="https://trello.com">Inspired by <FontAwesomeIcon icon={faTrello} />Trello</a>
      </div>
    </footer>
    );
  }
}