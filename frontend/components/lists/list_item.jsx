import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { updateList } from '../../actions/list_actions';
import { fetchCards, updateCard } from '../../actions/card_actions';
import CardItem from '../card/card_item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => {
  const cards = state.entities.cards;
  const cardsOnList = Object.values(cards).filter((card) => card.list_id === ownProps.listId);
  return {
    cardsOnList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (list) => dispatch(updateList(list)),
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    updateCard: (card) => dispatch(updateCard(card))
  }
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.list.id,
      title: props.list.title,
      cardOrder: []
    };

    this.update = this.update.bind(this);
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
    this.updateListTitle = this.updateListTitle.bind(this);
    this.orderCards = this.orderCards.bind(this);
    this.constructCards = this.constructCards.bind(this);
    this.persistNewOrderToDB = this.persistNewOrderToDB.bind(this);
  }

  componentDidMount() {
    this.orderCards();
    this.setHeightOfTextarea(this.textAreaRef);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.orderCards();
    }
  }

  setHeightOfTextarea(element) {
    element.style.height = 'inherit';
    element.style.height = element.scrollHeight + 'px';
  }

  update(field) {
    return (e) => {
      this.setHeightOfTextarea(e.target);
      this.setState({ [field]: e.target.value });
    };
  }

  handleKeyEscaper(e) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur();
    }
  }

  updateListTitle() {
    if (!this.state.title) {
      this.setState({ title: this.props.list.title });
      return;
    }
    if (this.state.title === this.props.list.title) return;
    this.props.updateList(this.state);
  }

  orderCards() {
    if (this.props.cardsOnList.length === 0) return;

    let orderedCards = [];
    let currentCard = this.props.cardsOnList.find((card) => card.prev_card_id === null);
    orderedCards.push(currentCard.id);
    while (currentCard.next_card_id !== null) {
      currentCard = this.props.cardsOnList.find((card) => card.id === currentCard.next_card_id);
      orderedCards.push(currentCard.id);
    }
    this.setState({ cardOrder: orderedCards });
  }

  constructCards() {
    if (this.state.cardOrder.length === 0) return null;

    const cardItems = this.state.cardOrder.map((cardId, index) => {
      return (
        <CardItem
          card={this.props.cardsOnList[index]}
          key={`card-${cardId}`}
          dragIdx={index}
        />
      )
    });

    return cardItems;
  }

  persistNewOrderToDB(card, newIndex, newCardOrder) {
    if (newIndex === 0) {
      card.prev_card_id = null;
      card.next_card_id = newCardOrder[1];
    }
    else if (newIndex === newCardOrder.length - 1) {
      card.prev_card_id = newCardOrder[newCardOrder.length - 2];
      card.next_card_id = null;
    }
    else {
      card.prev_card_id = newCardOrder[newIndex - 1];
      card.next_card_id = newCardOrder[newIndex + 1];
    }
    this.props.updateCard(card);
  }

  render() {
    if (!this.props.list) return null;

    return (
      <Draggable
        draggableId={`list_${this.props.list.id}`}
        index={this.props.dragIdx}
        type="LIST"
      >
        {(provided, snapshot) => (
          <div 
            className="list-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            
            >
            <div className="list-item-contents">
              <div 
                className="list-item-header"
                {...provided.dragHandleProps}
              >
                <textarea
                  className="list-name-editor"
                  onKeyDown={this.handleKeyEscaper}
                  onBlur={this.updateListTitle}
                  onChange={this.update('title')}
                  value={this.state.title}
                  ref={textAreaRef => this.textAreaRef = textAreaRef}
                >
                </textarea>
              </div>
              <Droppable 
                droppableId={`list_${this.props.list.id}`}
                direction="vertical"
                type="CARD"
              >
                {(provided, snapshot) => (
                  <div
                    className="card-index-container"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {this.constructCards()}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="new-card-container">
                <a href="#" className="new-card-button">
                  <span id="card-plus-icon"><FontAwesomeIcon icon={faPlus} /></span>
                  <span id="card-plus-text">Add a card</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
