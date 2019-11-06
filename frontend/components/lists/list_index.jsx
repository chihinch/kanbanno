import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import NewListFormContainer from './new_list_form';
import ListItem from './list_item';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  renderLists() {
    const listItems = this.props.lists.map((list) => {
      return (
        <ListItem list={list} boardId={this.props.boardId} key={`list-item-${list.id}`}/>
      )
    });

    return listItems;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.renderLists();
  //   }
  // }

  onDragEnd() {

  }

  render() {
    return (
      <DragDropContext 
        onDragEnd={this.onDragEnd}
      >
        <Droppable
          droppableId="board"
          type="list"
        >
          <div className="board-content">
            <div className = "list-index-container">
              {this.renderLists()}
              <NewListFormContainer />
            </div>
          </div>
        </Droppable>
      </DragDropContext>
    )
  }
}