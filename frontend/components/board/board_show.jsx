import React from 'react';

export default class BoardShow extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchBoard(this.props.match.params.boardId)
  }

  render() {
    return (
      <div>Hello?</div>
    )
  }
}