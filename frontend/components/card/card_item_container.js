import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';
import CardItem from './card_item';

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  return {
    card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openCardShowModal: (id) => dispatch(openModal('showCard', id)),
    fetchComments: (cardId) => dispatch(fetchComments(cardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);