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
        <div className="board-content">
          <Droppable
            droppableId={`board_${this.props.boardId}`}
            direction="horizontal"
            type="LIST"
          >
            {(provided, snapshot) => (
              <div 
                className="list-index-container"
                ref={provided.innerRef} 
                {...provided.droppableProps}
              >
                {this.renderLists()}
                {provided.placeholder}
                <NewListFormContainer />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    )
  }
}