import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { openModal } from '../../actions/modal_actions';
import { closeMenu } from '../../actions/menu_actions';

const mapStateToProps = ({ entities }) => {
  return {
    boards: entities.boards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewBoardModal: () => dispatch(openModal('newBoard')),
    closeMenu: () => dispatch(closeMenu()),
  };
};

class NavBoardMenu extends React.Component {
  handleClickOutside(e) {
    this.props.closeMenu();
  }
  
  render() {
    const boardItems = Object.values(this.props.boards).map((board) => {
      return (
        <div className="board-li" key={`personal-${board.id}`}>
          <Link to={`/boards/${board.id}`} className="board-li-link">
            <div className="board-li-contents">
              <div className="board-li-color-block"></div>
              <div className="board-li-title">{board.title}</div>
            </div>
          </Link>
        </div>
      )
    });

    return (
      <div className="board-menu-container">
        <div className="board-menu-lists">
          <div className="board-menu-section" id="personal-boards">
            <div className="board-menu-section-header">
              <span>
                <span className="board-menu-section-icon"><FontAwesomeIcon icon={faUser} /></span>
                <span className="board-menu-section-title">Personal Boards</span>
              </span>
            </div>

            <div className="board-menu-section-list">
              {boardItems}
            </div>
          </div>
        </div>
        <div className="board-menu-options">
          <button onClick={this.props.openNewBoardModal} className="board-menu-option">Create new board...</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(NavBoardMenu));