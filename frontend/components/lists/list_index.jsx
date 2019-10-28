import React from 'react';

import ListFormContainer from './list_form';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
  }

  renderLists() {
    const listItems = this.props.lists.map((list) => {
      return (
      <div className="list-item-container" key={`list-item-${list.id}`}>
        <div className="list-item-contents">
          <div className="list-item-header">{list.title}</div>
        </div>
      </div>
      )
    });

    return listItems;
  }

  render() {
    return (
      <div className="board-content">
        <div className = "list-index-container">
          {this.renderLists()}
          <ListFormContainer />
        </div>
      </div>
    )
  }
}