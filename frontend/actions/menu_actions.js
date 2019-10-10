export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const openMenu = (menu) => {
  return {
    type: OPEN_MENU,
    menu
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
  };
};