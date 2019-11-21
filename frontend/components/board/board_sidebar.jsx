import { connect } from 'react-redux';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

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
        <span onClick={this.closeBoardSidebar}><FontAwesomeIcon icon={faTimes} /></span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardSidebar);