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
        <ListItem list={list} boardId={this.props.boardId} key={`list-item-${list.id}`}/>
      )
    });

    return listItems;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.renderLists();
    }
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