import { connect } from 'react-redux';

import CardShow from './card_show';
import { updateCard } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  return {
    card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);
