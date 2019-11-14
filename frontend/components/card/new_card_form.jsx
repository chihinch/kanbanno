import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createCard } from '../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    title: ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (cardId, list) => dispatch(createCard(cardId, list))
  }
};

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let card;
    card = Object.assign({}, this.state);
    this.props.createCard(this.props.listId, card)
      .then(() => this.setState({ title: "" }));
  }

  render() {
    return (
      <div className="card-form-container">
        <form onSubmit={this.handleSubmit} className="card-form">
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="card-input-title"
            placeholder="Enter a title for this card..."
          />

          <input type="submit"
            value="Add Card"
            disabled={!this.state.title}
            className="list-input-submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCardForm));