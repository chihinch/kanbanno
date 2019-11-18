import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.card.id,
      title: props.card.title,
      description: props.card.description,
    }
    this.update = this.update.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
    this.updateCardTitle = this.updateCardTitle.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleKeyEscaper(e) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur();
    }
  }

  updateCardTitle() {
    if (!this.state.title) {
      this.setState({ title: this.props.card.title });
      return;
    }

    if (this.state.title === this.props.card.title) {
      return;
    }

    this.props.updateCard(this.state);
  }

  render() {
    return (
      <div className="card-show-container">
        <div className="card-show-header">
          <FontAwesomeIcon icon={faPencilAlt} />
          <input type="text" 
            value={this.state.title}
            onChange={this.update('title')}
            onKeyDown={this.handleKeyEscaper}
            onBlur={this.updateCardTitle}
          >
          </input>
        </div>
      </div>
    )
  }
};