export const createMembership = (membership) => {
  return $.ajax({
    method: 'POST',
    url: '/api/board_memberships',
    data: { membership }
  });
};

export const deleteMembership = (membership) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/boards_memberships/${id}`,
  });
};