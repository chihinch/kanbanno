export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const openMenu = (type, id) => {
  return {
    type: OPEN_MENU,
    menu: {
      type,
      id
    }
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
  };
};