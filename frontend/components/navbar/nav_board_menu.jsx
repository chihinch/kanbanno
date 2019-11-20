import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import onClickOutside from 'react-onclickoutside';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { closeMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
  return {
    boards: Object.keys(state.entities.boards).map((id) => state.entities.boards[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewBoardModal: () => dispatch(openModal('newBoard')),
    fetchBoards: () => dispatch(fetchBoards()),
    closeMenu: () => dispatch(closeMenu()),
  };
};

class NavBoardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.constructBoards = this.constructBoards.bind(this);
  }

  handleClickOutside(e) {
    this.props.closeMenu();
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  constructBoards(type) {
    let selectedBoards;
    if (type === 'personal') {
      selectedBoards = this.props.boards.filter((board) => board.members.length === 1);
    }
    else if (type === 'shared') {
      selectedBoards = this.props.boards.filter((board) => board.members.length > 1)
    }

    const boardItems = selectedBoards.map((board) => {
      return (
        <div className="board-li" key={`personal-${board.id}`}>
          <Link to={`/boards/${board.id}`} onClick={this.props.closeMenu} className="board-li-link">
            <div className="board-li-contents">
              <div className="board-li-color-block"></div>
              <div className="board-li-title">{board.title}</div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="board-menu-section-list">
        {boardItems}
      </div>
    );
  }
  
  render() {
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
            {this.constructBoards('personal')}
          </div>

          <div className="board-menu-section" id="shared-boards">
            <div className="board-menu-section-header">
              <span>
                <span className="board-menu-section-icon"><FontAwesomeIcon icon={faUsers} /></span>
                <span className="board-menu-section-title">Shared Boards</span>
              </span>
            </div>
            {this.constructBoards('shared')}
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