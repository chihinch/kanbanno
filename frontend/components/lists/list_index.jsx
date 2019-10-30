import React from 'react';

import NewListFormContainer from './new_list_form';
import ListItem from './list_item';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
  }

  renderLists() {
    const listItems = this.props.lists.map((list) => {
      return (
      // <div className="list-item-container" key={`list-item-${list.id}`}>
      //   <div className="list-item-contents">
      //     <div className="list-item-header">{list.title}</div>
      //   </div>
      // </div>
      <ListItem list={list} />
      )
    });

    return listItems;
  }

  render() {
    return (
      <div className="board-content">
        <div className = "list-index-container">
          {this.renderLists()}
          <NewListFormContainer />
        </div>
      </div>
    )
  }
}