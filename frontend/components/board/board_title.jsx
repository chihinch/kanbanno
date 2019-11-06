import React from 'react';

export default class BoardTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return(
      <div className="board-show-title">
        <input type="text"
          value={this.state.title}
          size={this.state.title.length}
          onChange={this.update('title')} />
      </div>
    );
  }
}