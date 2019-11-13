import { RECEIVE_CARDS, RECEIVE_CARD } from '../../actions/card_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import merge from 'lodash/merge';

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return merge({}, action.cards);
    case RECEIVE_BOARD:
      return merge({}, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, { [action.card.id]: action.card });
    default:
      return state;
  }
};

export default cardsReducer;