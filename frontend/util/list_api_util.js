export const fetchLists = (boardId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists`
  });
};

export const createList = (boardId, list) => {
  return $.ajax({
    method: 'POST',
    url: `/api/boards/${boardId}/lists`,
    data: { list }
  });
};

export const updateList = (list) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list }
  });
};