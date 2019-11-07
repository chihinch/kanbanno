import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import NewListFormContainer from './new_list_form';
import ListItem from './list_item';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOrder: []
    };
    // this.orderLists = this.orderLists.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.boardId)
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.boardId !== this.props.boardId) {
      this.props.fetchLists(this.props.boardId);
    }

    if (prevProps.lists !== this.props.lists) {
      // this.orderLists();
    }
  }

  // orderLists() {
  //   const 
  // }

  renderLists() {
    const listItems = this.state.listOrder.map((list, index) => {
      return (
        <ListItem 
          list={list} 
          boardId={this.props.boardId} 
          key={`list-item-${list.id}`} 
          dragIdx={index}
        />
      )
    });
    return listItems;
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
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