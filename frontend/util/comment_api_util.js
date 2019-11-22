export const fetchComments = (cardId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}/comments`,
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/cards/${comment.card_id}/comments`,
    data: { comment }
  });
};

export const fetchComment = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  });
};