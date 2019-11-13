import React from 'react';

export default class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOrder: []
    };
    this.orderCards = this.orderCards.bind(this);
    this.constructCards = this.constructCards.bind(this);
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
}