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
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    // this.props.fetchLists(this.props.boardId);
    this.orderLists();
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.boardId !== this.props.boardId) {
    //   this.props.fetchLists(this.props.boardId);
    // }
    
    if (prevProps.lists !== this.props.lists) {
      this.orderLists();
    }
  }

  orderLists() {
    let orderedLists = [];
    // debugger
    this.props.lists.forEach((list) => {
      orderedLists.push(list);
    });
    this.setState( { listOrder: orderedLists });
  }

  renderLists() {
    // debugger
    const listItems = this.state.listOrder.map((list, index) => {
      // const listFromProps = this.props.lists.find((list) => list.id === listId)
      return (
        <ListItem 
          list={list} 
          boardId={this.props.boardId} 
          key={`list-${list.id}`} 
          dragIdx={index}
        />
      )
    });
    return listItems;
  }

  onDragEnd(result) {
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
    debugger
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