import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { updateCard } from '../../actions/card_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card))
  };
};

class CardItem extends React.Component {
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
        draggableId={`${this.props.card.id}`}
        index={this.props.dragIdx}
        type="CARD"
      >
        {(provided, snapshot) => (
          <div
            className="card-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div>
              <span>{this.state.title}</span>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}

export default connect(null, mapDispatchToProps)(CardItem);
