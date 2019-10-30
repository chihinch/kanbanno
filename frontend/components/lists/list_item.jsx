import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.list.title
    };

    this.update = this.update.bind(this);
    this.focusListNameChanger = this.focusListNameChanger.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  focusListNameChanger() {
    console.log(event.target.value);
  }

  render() {
    return (
    <div className="list-item-container">
      <div className="list-item-contents">
        <div className="list-item-header">
          <textarea 
            className="list-name-editor" 
            onBlur={this.focusListNameChanger} 
            onChange={this.update('title')} 
            value={this.state.title}
          >
          </textarea>
        </div>
        <div className="new-card-container">
          + Add a card
        </div>
      </div>
    </div>
    );
  }
};

