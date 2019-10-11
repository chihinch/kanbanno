import React from 'react';
import { connect } from 'react-redux';

import NavAccountMenu from '../components/navbar/nav_account_menu';
import NavBoardMenu from '../components/navbar/nav_board_menu';
import { closeMenu } from '../actions/menu_actions';

function Menu({ menu, closeMenu }) {
  if (!menu) {
    return null;
  }

  let component;
  switch (menu) {
    case 'navAccountMenu':
      component = <NavAccountMenu />;
      break;
    case 'navBoardMenu':
      component = <NavBoardMenu />;
      break;
    default:
      return null;
  }

  return (component);
}

const mapStateToProps = (state) => {
  return {
    menu: state.ui.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(closeMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

