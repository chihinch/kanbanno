export const fetchBoards = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/boards',
  });
};

export const createBoard = (board) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  });
};

export const fetchBoard = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/boards/${id}`
  });
};

export const updateBoard = (board) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/board/${board.id}`,
    data: { board }
  });
};

export const deleteBoard = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/board/${id}`,
  });
};