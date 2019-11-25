import { connect } from 'react-redux';
import React from 'react';

import { demoLogin } from '../../actions/session_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAngellist, faGithub, faLinkedin, faTrello } from '@fortawesome/free-brands-svg-icons';

const mapDispatchToProps = (dispatch) => {
  return {
    demoLogin: () => dispatch(demoLogin())
  };
};

class Footer extends React.Component {
  render () {
    return (
    <footer>
      <ul>
        <li key="footer-li-1"><a onClick={this.props.demoLogin}><FontAwesomeIcon icon={faDoorOpen} />Tour</a></li>
        <li key="footer-li-2"><a href="https://dannychan.dev" target="_blank"><FontAwesomeIcon icon={faIdBadge} />Portfolio</a></li>
        <li key="footer-li-3"><a href="https://github.com/chihinch/kanbanno" target="_blank"><FontAwesomeIcon icon={faGithub} />GitHub</a></li>
        <li key="footer-li-4"><a href="https://linkedin.com/in/chihinchan" target="_blank"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
        <li key="footer-li-5"><a href="https://angel.co/chihinch" target="_blank"><FontAwesomeIcon icon={faAngellist} />AngelList</a></li>
        <li key="footer-li-6"><a href="mailto:chihinch@outlook.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} />Email Me</a></li>
      </ul>

      <div>
        <h1>Kanbanno by Danny Chan</h1>
        <a href="https://trello.com">Inspired by <FontAwesomeIcon icon={faTrello} />Trello</a>
      </div>
    </footer>
    );
  }
}

export default connect(null, mapDispatchToProps)(Footer);