import React from 'react';

export default class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.board;
  }

  componentDidMount() {
    this.props.fetchBoard(parseInt(this.props.match.params.boardId));
  }

  static getDerivedStateFromProps(props, state) {

    if (props.board !== state) {
      return { 
        id: props.board.id,
        title: props.board.title,
        admin_id: props.board.admin_id,
        archived: props.board.archived,
      };
    }
    return null;
  }

  render() {
    if (this.state.id == null) {
      return null;
    }

    return (
      <div className="board-show-container">
        <div className="board-show-header">
          <div className="board-show-title">
            <span><input type="text" value={this.state.title} /></span>
          </div>
        </div>
        <div className="board-show-content">
          <h1>Lists go here!</h1>
        </div>
      </div>
    )
  }
}