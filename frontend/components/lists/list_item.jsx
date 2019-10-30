import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="list-item-container" key={`list-item-${this.props.list.id}`}>
      <div className="list-item-contents">
        <div className="list-item-header">
          <textarea>{this.props.list.title}</textarea>
        {/* {this.props.list.title} */}
        </div>

      </div>
    </div>
    );
  }
};

