import * as CardAPIUtil from '../util/card_api_util';

// Card action type constants
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARD_ERRORS = 'CLEAR_CARD_ERRORS';

// Card action creators
export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards,
  };
};

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CARD_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_CARD_ERRORS
  }
}

// Card thunk action creators
export const fetchCards = (listId) => (dispatch) => {
  return CardAPIUtil.fetchCards(listId).then((cards) => {
    dispatch(receiveCards(cards))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const fetchCard = (cardId) => (dispatch) => {
  return CardAPIUtil.fetchCard(cardId).then((card) => {
    dispatch(receiveCard(card))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const createCard = (cardId, card) => (dispatch) => {
  return CardAPIUtil.createCard(cardId, card).then((cards) => {
    dispatch(receiveCards(cards));
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const updateCard = (card) => (dispatch) => {
  return CardAPIUtil.updateCard(card).then((cards) => {
    dispatch(receiveCards(cards));
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON));
    }
  );
};