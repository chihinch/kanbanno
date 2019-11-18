import { connect } from 'react-redux';

import CardShow from './card_show';
import { updateCard } from '../../actions/card_actions'

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  return {
    card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);
