import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
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
    openCardShowModal: (id) => dispatch(openModal('showCard', id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);