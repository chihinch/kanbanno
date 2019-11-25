import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.card.id,
      title: props.card.title,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick() {
    this.props.fetchComments(this.state.id);
    this.props.openCardShowModal(this.state.id);
  }

  render() {
    const duedate = !this.props.card.due_date ? '' : new Date(this.props.card.due_date);
    const todayDate = new Date();

    let dateProximityStyle = { background: 'transparent' }; 
    let readableDuedate;
    let duedateDisplay;

    if (duedate) {
      readableDuedate = duedate.toLocaleDateString([], { timeZone: 'UTC', month: 'short', day: 'numeric' });
      if (duedate < todayDate) {
        dateProximityStyle = { 'background-color': '#ec9488', padding: '2px', color: 'white' };
      }
      const timeDiff = Math.abs(duedate.getTime() - todayDate.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (daysDiff <= 3) {
        dateProximityStyle = { 'background-color': '#e6c60d', padding: '2px', color: 'black' };
      }
      duedateDisplay = <span id="card-item-duedate" style={dateProximityStyle}><FontAwesomeIcon icon={faCalendar} />{readableDuedate}</span>;
    }
    else {
      duedateDisplay = null;
    }

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
            <div onClick={this.handleCardClick}>
              <span>{this.state.title}</span>
              {duedateDisplay}
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}