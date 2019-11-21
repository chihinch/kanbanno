import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../../actions/membership_actions';

const membershipReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return action.membershipMessage;
    case REMOVE_MEMBERSHIP:
      return null;
    default:
      return state;
  }
};

export default membershipReducer;