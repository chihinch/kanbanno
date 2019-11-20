import React from 'react';
import { connect } from 'react-redux';

import NavAccountMenu from '../navbar/nav_account_menu';
import NavBoardMenu from '../navbar/nav_board_menu';
import MembersMenu from '../board/members_menu';
import { closeMenu } from '../../actions/menu_actions';

function Menu({ menu, closeMenu }) {
  if (!menu) {
    return null;
  }

  let component;
  switch (menu.type) {
    case 'navAccountMenu':
      component = <NavAccountMenu />;
      break;
    case 'navBoardMenu':
      component = <NavBoardMenu />;
      break;
    case 'membersMenu':
      component = <MembersMenu boardId={menu.id} />;
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

