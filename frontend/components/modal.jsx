import React from 'react';
import { connect } from 'react-redux';

import NewBoardFormContainer from './board/new_board_form_container';
import UpdateBoardFormContainer from './board/update_board_form_container';
import { closeModal } from '../actions/modal_actions';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.type) { // change this to modal.type
    case 'newBoard':
      component = <NewBoardFormContainer />;
      break;
    case 'updateBoard':
      // can pass in boardid = modal.id
      // msp will now have board id
      component = <UpdateBoardFormContainer boardId={modal.boardId}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

