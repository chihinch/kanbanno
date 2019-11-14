import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import NewListFormContainer from './new_list_form';
import ListItem from './list_item';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOrder: [],
      cardDragResult: {}
    };
    this.orderLists = this.orderLists.bind(this);
    this.constructLists = this.constructLists.bind(this);
    this.persistNewOrderToDB = this.persistNewOrderToDB.bind(this);
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
    if (Object.keys(this.props.lists).length === 0) return;

    let listsFromProps = Object.values(this.props.lists);
    let orderedLists = [];

    let currentList = listsFromProps.find((list) => list.prev_list_id === null);
    orderedLists.push(currentList.id);
    while (currentList.next_list_id !== null) {
      currentList = listsFromProps.find((list) => list.id === currentList.next_list_id);
      orderedLists.push(currentList.id);
    }
    this.setState( { listOrder: orderedLists });
  }

  constructLists() {
    if (this.state.listOrder.length === 0 ) return null;

    const listItems = this.state.listOrder.map((listId, index) => {
      return (
        <ListItem 
          list={this.props.lists[listId]} 
          key={`list-${listId}`} 
          dragIdx={index}
          cardDragResult={this.state.cardDragResult}
        />
      )
    });

    return listItems;
  }

  persistNewOrderToDB(list, newIndex, newListOrder) {
    if (newIndex === 0) {
      list.prev_list_id = null;
      list.next_list_id = newListOrder[1];
    }
    else if (newIndex === newListOrder.length - 1) {
      list.prev_list_id = newListOrder[newListOrder.length - 2];
      list.next_list_id = null;
    }
    else {
      list.prev_list_id = newListOrder[newIndex - 1];
      list.next_list_id = newListOrder[newIndex + 1];
    }
    this.props.updateList(list);
  }

  onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    debugger

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
      const draggedListId = draggableId.slice(draggableId.search('_') + 1);
      newListOrder.splice(destination.index, 0, draggedListId);
      const newState = {
        ...this.state,
        listOrder: newListOrder,
      };
      this.setState(newState);
      this.persistNewOrderToDB(this.props.lists[draggedListId], destination.index, newListOrder);
    }

    if (type === 'CARD') {
      this.setState({cardDragResult: result});
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
                {this.constructLists()}
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