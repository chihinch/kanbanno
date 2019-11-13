import React from 'react';

export default class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOrder: []
    };
    this.orderCards = this.orderCards.bind(this);
    this.constructCards = this.constructCards.bind(this);
    this.persistNewOrderToDB = this.persistNewOrderToDB.bind(this);
  }

  componentDidMount() {
    this.orderCards();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.orderCards();
    }
  }

  orderCards() {
    if (Object.keys(this.props.cards).length === 0) return;

    let cardsFromProps = Object.values(this.props.cards);
    let orderedCards = [];

    let currentCard = cardsFromProps.find((card) => card.prev_card_id === null);
    orderedCards.push(currentCard.id);
    while (currentCard.next_card_id !== null) {
      currentCard = cardsFromProps.find((card) => card.id === currentCard.next_card_id);
      orderedCards.push(currentCard.id);
    }
    this.setState({ cardOrder: orderedLists });
  }

  constructCards() {
    const cardItems = this.state.cardOrder.map((cardId, index) => {
      return (
        <CardItem
          card={this.props.cards[cardId]}
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
    if (!this.state.listOrder) return null;

    return (
      <Droppable
        droppableId={`list_${this.props.listId}`}
        direction="horizontal"
        type="LIST"
      >
        {(provided, snapshot) => (
          <div
            className="list-index-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.constructCards()}
            {provided.placeholder}
            <NewListFormContainer />
          </div>
        )}
      </Droppable>
    )
  }
}