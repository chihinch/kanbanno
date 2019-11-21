import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP, CLEAR_MEMBERSHIP_MESSAGE } from '../../actions/membership_actions';

const membershipReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return action.membershipMessage;
    case REMOVE_MEMBERSHIP:
      return null;
    case CLEAR_MEMBERSHIP_MESSAGE:
      return null;
    default:
      return state;
  }
};

export default membershipReducer;