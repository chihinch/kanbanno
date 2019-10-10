import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { openMenu } from '../../actions/menu_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewBoardModal: () => dispatch(openModal('newBoard')),
    openMenu: (menu) => dispatch(openMenu(menu)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);