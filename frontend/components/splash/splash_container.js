// The first thing a user sees upon loading the website if not logged in

import { connect } from 'react-redux';

import Greeting from './splash';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps, null)(Greeting);