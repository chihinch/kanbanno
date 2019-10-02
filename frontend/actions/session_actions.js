import * as SessionAPIUtil from '../util/session_api_util';

// Session action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// Session action creators
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

// Session thunk action creators
export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user).then((user) => {
      dispatch(receiveCurrentUser(user))
    }, (error) => {
      dispatch(receiveErrors(error.responseJSON))
    });
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user).then((user) => {
      dispatch(receiveCurrentUser(user))
    }, (error) => {
      dispatch(receiveErrors(error.responseJSON))
    });
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then((user) => {
      dispatch(logoutCurrentUser())
    });
};

