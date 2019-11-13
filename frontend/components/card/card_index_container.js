import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchCards, updateCard } from '../../actions/card_actions';
import { CardIndex } from './card_index';

const mapStateToProps = (state) => {
  return {
    cards: state.entities.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    updateCard: (card) => dispatch(updateCard(card))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardIndex));