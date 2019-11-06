import React from 'react';
import { connect } from 'react-redux';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateBoard: (board) => dispatch(updateBoard(board))
  };
}

class BoardTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      id: props.boardId
    };
    this.update = this.update.bind(this);
    this.updateBoardTitle = this.updateBoardTitle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ title: this.props.title });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateBoardTitle() {
    this.props.updateBoard(this.state);
  }

  render() {
    return(
      <div className="board-show-title">
        <input type="text"
          value={this.state.title}
          size={this.state.title.length}
          onChange={this.update('title')} 
          onBlur={this.updateBoardTitle}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(BoardTitle);