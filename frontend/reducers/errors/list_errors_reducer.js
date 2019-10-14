import { RECEIVE_LIST_ERRORS, CLEAR_LIST_ERRORS } from '../../actions/list_actions';

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case CLEAR_LIST_ERRORS:
      return [];
    default:
      return state;
  }
};

export default listErrorsReducer;