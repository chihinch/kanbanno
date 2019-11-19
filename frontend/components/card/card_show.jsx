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
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      this.setHeightOfTextarea(e.target);
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

  setHeightOfTextarea(element) {
    element.style.height = 'inherit';
    element.style.height = element.scrollHeight + 'px';
  }

  render() {
    return (
      <div className="card-show-container">
        <div className="card-show-header">
          <span id="card-title-icon" className="card-large-icon"><FontAwesomeIcon icon={faPencilAlt} /></span>
          <textarea
            className="card-title-editor" 
            onKeyDown={this.handleKeyEscaper}
            onBlur={this.updateCard}
            onChange={this.update('title')}
            value={this.state.title}
            >
          </textarea>
          <span id="card-show-close" className="card-large-icon" onClick={this.props.closeModal}><FontAwesomeIcon icon={faTimes} /></span>
          <div id="card-show-header-listname"><p>in list {this.props.listTitle}</p></div>
        </div>

        <div className="card-show-main">
          <div className="card-description">
            <div className="card-description-top">
              <span className="card-large-icon"><FontAwesomeIcon icon={faAlignJustify} /></span>
              <h3>Description</h3>
            </div>
            <textarea
              className="card-description-editor"
              onKeyDown={this.handleKeyEscaper}
              onBlur={this.updateCard}
              onChange={this.update('description')}
              value={this.state.description}
              placeholder="Click here to add a description..."
            >
            </textarea>
          </div>
        </div>
      </div>
    )
  }
};