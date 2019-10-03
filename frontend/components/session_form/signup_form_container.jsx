import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    formHeadingText: 'Create a Kanbanno Account',
    navLink: <Link to="/login" className="session-alt-link">or sign in to your account</Link>,
    submitLabel: "Create a New Account"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);