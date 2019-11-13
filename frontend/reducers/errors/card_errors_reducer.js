import { RECEIVE_CARD_ERRORS, CLEAR_CARD_ERRORS } from '../../actions/card_actions';

const cardErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARD_ERRORS:
      return action.errors;
    case CLEAR_CARD_ERRORS:
      return [];
    default:
      return state;
  }
};

export default cardErrorsReducer;