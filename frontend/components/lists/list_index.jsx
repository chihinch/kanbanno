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
    this.orderLists = this.orderLists.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.persistNewOrder = this.persistNewOrder.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    this.orderLists();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lists !== this.props.lists) {
      this.orderLists();
    }
  }

  orderLists() {
    let orderedLists = [];
    Object.keys(this.props.lists).forEach((listId) => {
      orderedLists.push(listId);
    });
    this.setState( { listOrder: orderedLists });
  }

  renderLists() {
    const listItems = this.state.listOrder.map((listId, index) => {
      return (
        <ListItem 
          list={this.props.lists[listId]} 
          boardId={this.props.boardId} 
          key={`list-${listId}`} 
          dragIdx={index}
        />
      )
    });
    return listItems;
  }

  persistNewOrderToDB(list, index) {
    if (index === 0) {
      list.prev_list_id = null;
      list.next_list_id = this.state.listOrder[1];
    }
    else if (index === this.state.listOrder.length - 1) {
      list.prev_list_id = this.state.listOrder[this.state.listOrder.length - 2];
      list.next_list_id = null;
    }
    else {
      list.prev_list_id = this.state.listOrder[index - 1];
      list.next_list_id = this.state.listOrder[index + 1];
    }
    this.props.updateList(list);
  }

  onDragEnd(result) {
    // debugger
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'LIST') {
      const newListOrder = Array.from(this.state.listOrder);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        listOrder: newListOrder,
      };
      this.setState(newState);
    }
  }

  render() {
    if (!this.state.listOrder) return null; 

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