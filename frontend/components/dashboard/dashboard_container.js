// The first thing a user sees upon logging in
// Or if a user returns to home

import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);