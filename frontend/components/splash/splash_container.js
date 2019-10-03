// The first thing a user sees upon loading the website if not logged in

import { connect } from 'react-redux';

import Splash from './splash';
import { demoLogin } from '../../actions/session_actions';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);