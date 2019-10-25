export const fetchLists = (boardId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists`
  });
};

export const createList = (list) => {
  return $.ajax({
    method: 'POST',
    url: '/api/lists',
    data: { list }
  });
};

export const fetchList = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`
  });
};