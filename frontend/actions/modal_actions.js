export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (type, boardId) => {
  // add board id as 2nd argument
  return {
    type: OPEN_MODAL,
    modal: {
      type,
      boardId
    } // {type of modal as a string, id points to boardid}
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};