import { connect } from 'react-redux';

import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(BoardForm);