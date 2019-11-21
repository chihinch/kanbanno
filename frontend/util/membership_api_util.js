export const createMembership = (membership) => {
  return $.ajax({
    method: 'POST',
    url: '/api/board_memberships',
    data: { membership }
  });
};