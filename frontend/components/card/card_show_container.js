import { connect } from 'react-redux';

import CardShow from './card_show';
import { updateCard } from '../../actions/card_actions';
import { clearComments } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  const listId = card.list_id;
  const listTitle = state.entities.lists[listId].title;
  return {
    card,
    listTitle
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    clearComments: () => dispatch(clearComments()),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);
