import * as MembershipAPIUtil from '../util/membership_api_util';

// Membership action type constants
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const CLEAR_MEMBERSHIP_MESSAGE = 'CLEAR_MEMBERSHIP_MESSAGE';

// Membership action creators
export const receiveMembership = (membershipMessage) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membershipMessage,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MEMBERSHIP_MESSAGE,
  };
};

// Membership thunk action creators
export const createMembership = (membership) => (dispatch) => {
  return MembershipAPIUtil.createMembership(membership).then((message) => {
    return dispatch(receiveMembership(message))
  });
};