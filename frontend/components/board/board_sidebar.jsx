import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';

import { openModal } from '../../actions/modal_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => {
  const boardId = parseInt(ownProps.match.params.boardId);
  return {
    boardId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUpdateBoardModal: (id) => dispatch(openModal('updateBoard', id)),
  };
};

class BoardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.closeBoardSidebar = this.closeBoardSidebar.bind(this);
  }

  closeBoardSidebar() {
    document.getElementById("board-sidebar").style.width = "0";
    document.getElementById("board-show-container").style.width = "100%";
  }

  render() {
    return (
      <div className="board-sidebar" id="board-sidebar">
        <div className="board-sidebar-header">
          <span className="board-sidebar-title">Menu</span>
          <span className="menu-close" onClick={this.closeBoardSidebar}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="board-sidebar-content">
          <div className="board-sidebar-options">
            <a to="#" className="board-sidebar-option" id="sidebar-edit" onClick={() => this.props.openUpdateBoardModal(this.props.boardId)}>
              <span><FontAwesomeIcon icon={faBars} /></span>
              Edit Board
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardSidebar));