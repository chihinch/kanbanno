import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

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
    this.updateCard = this.updateCard.bind(this);
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

  updateCard() {
    if (!this.state.title || !this.state.description) {
      this.setState({ 
        title: this.props.card.title,
        description: this.props.card.description 
      });
      return;
    }

    if (this.state.title === this.props.card.title && this.state.description === this.props.card.description) {
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
            className="card-title-editor" 
            onKeyDown={this.handleKeyEscaper}
            onBlur={this.updateCard}
            onChange={this.update('title')}
            value={this.state.title}
            >
          </input>
        </div>

        <div className="card-show-main">
          <div className="card-description">
            <FontAwesomeIcon icon={faAlignJustify} />
            <textarea
              className="card-description-editor"
              onKeyDown={this.handleKeyEscaper}
              onBlur={this.updateCard}
              onChange={this.update('description')}
              value={this.state.description}
            >

            </textarea>
          </div>
        </div>
      </div>
    )
  }
};