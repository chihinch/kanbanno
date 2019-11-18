import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    openCardShowModal: (id) => dispatch(openModal('showCard', id))
  };
};

class CardItem extends React.Component {
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

export default connect(null, mapDispatchToProps)(CardItem);
