export const fetchCards = (listId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/lists/${listId}/cards`
  });
};

export const createCard = (listId, card) => {
  return $.ajax({
    method: 'POST',
    url: `/api/lists/${listId}/cards`,
    data: { card }
  });
};

export const fetchCard = (cardId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}`
  });
}

export const updateCard = (card) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/cards/${card.id}`,
    data: { card }
  });
};