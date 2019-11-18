import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.card.id,
      title: props.card.title,
    };
  }

  render() {
    return (
      <Draggable 
        draggableId={`card_${this.props.card.id}`}
        index={this.props.dragIdx}
        type="CARD"
      >
        {(provided, snapshot) => (
          <div
            className="card-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div onClick={() => this.props.openCardShowModal(this.state.id)}>
              <span>{this.state.title}</span>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}