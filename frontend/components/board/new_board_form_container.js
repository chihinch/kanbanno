import { connect } from 'react-redux';

import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = (state) => {
  return {
    board: {
      title: '',
      description: ''
    },
    formType: 'newBoard'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);