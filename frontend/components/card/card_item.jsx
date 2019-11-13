import { React } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.card.id,
      title: props.card.title,
      description: props.card.description
    };
  }

  render() {
    return (
      <Draggable 
        draggableId={this.props.card.id}
        index={this.props.dragIdx}
        type="CARD"
      >
        {(provided, snapshot) => (
          <div
            className="list-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div>
              {this.state.title}
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
