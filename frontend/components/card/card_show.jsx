import React from 'react';

import CommentIndexContainer from '../comment/comment_index_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt, faAlignJustify, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.card.title,
      description: props.card.description,
      due_date: props.card.due_date ? props.card.due_date : new Date(),
      editDuedate: false,
    }
    this.toggleDuedateForm = this.toggleDuedateForm.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  toggleDuedateForm() {
    this.setState({ editDuedate: !this.state.editDuedate });
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

    if (this.state.title === this.props.card.title && this.state.description === this.props.card.description && this.state.due_date === this.props.card.due_date) {
      return;
    }

    this.props.updateCard({
      id: this.props.card.id,
      title: this.state.title,
      description: this.state.description,
      due_date: this.state.due_date,
    });

    this.toggleDuedateForm();
  }

  setHeightOfTextarea(element) {
    element.style.height = 'inherit';
    element.style.height = element.scrollHeight + 'px';
  }

  handleExit() {
    this.props.clearComments();
    this.props.closeModal();
  }

  render() {
    const duedateForm = 
      <form className="duedate-form" onSubmit={this.updateCard}>
        <input type="date" value={this.state.duedate} onChange={this.update('due_date')} />
        <input type="submit" value="Save"/>
      </form>

    const duedate = new Date(this.state.due_date);
    const readableDuedate = duedate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })
    // debugger

    const duedateDisplay = 
      <div className="duedate-display">
        <span>{readableDuedate}</span>
        <button onClick={this.toggleDuedateForm}>Change</button>
      </div>

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
          <span id="card-show-close" className="card-large-icon" onClick={this.handleExit}><FontAwesomeIcon icon={faTimes} /></span>
          <div id="card-show-header-listname"><p>in list {this.props.listTitle}</p></div>
        </div>

        <div className="card-show-main">
          <div className="card-section-container">
            <div className="card-section-header" id="card-duedate">
              <span className="card-large-icon"><FontAwesomeIcon icon={faCalendar} /></span>
              <h3>Due Date</h3>
            </div>
            {this.state.editDuedate ? duedateForm : duedateDisplay}
          </div>
          <div className="card-section-container">
            <div className="card-section-header" id="card-description">
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

          <CommentIndexContainer  cardId={this.props.card.id}/>
        </div>
      </div>
    )
  }
};