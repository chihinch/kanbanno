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
      due_date: props.card.due_date,
      editDuedate: false,
    }
    this.toggleDuedateForm = this.toggleDuedateForm.bind(this);
    this.exitDueDateForm = this.exitDueDateForm.bind(this);
    this.update = this.update.bind(this);
    this.removeDuedate = this.removeDuedate.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.setHeightOfTextarea = this.setHeightOfTextarea.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.card.title,
        description: this.props.card.description,
        due_date: this.props.card.due_date,
        editDuedate: false,
      });
    }
  }

  toggleDuedateForm() {
    this.setState({ editDuedate: !this.state.editDuedate });
  }

  exitDueDateForm() {
    this.setState({ due_date: this.props.card.due_date });
    this.toggleDuedateForm();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      if (e.target.tagName === 'TEXTAREA') {
        this.setHeightOfTextarea(e.target);
      }
    };
  }

  handleKeyEscaper(e) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur();
    }
  }

  updateCard() {
    let title = this.state.title;
    let description = this.state.description;
    let duedate = this.state.due_date;
    
    if (title === this.props.card.title && description === this.props.card.description && duedate === this.props.card.due_date) {
      return;
    }

    // Card only requires a title; description & due_date are optional
    if (!title) {
      this.setState({ title: this.props.card.title });
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

  removeDuedate() {
    this.props.updateCard({
      id: this.props.card.id,
      title: this.props.card.title,
      description: this.props.card.description,
      due_date: null,
    });
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
    const duedate = !this.state.due_date ? '' : new Date(this.state.due_date);

    const duedateForm = 
      <form className="duedate-form" onSubmit={this.updateCard}>
          <input type="date" value={this.state.due_date ? this.state.due_date : ''} onChange={this.update('due_date')} required/>
          <input type="submit" value="Save"/>
          <span onClick={this.exitDueDateForm}><FontAwesomeIcon icon={faTimes} />Cancel</span>
      </form>

    const todayDate = new Date();
    let dateProximityMsg = '';
    let dateProximityStyle = { background: 'transparent' }; 
    
    let readableDuedate;
    if (duedate) {
      readableDuedate = duedate.toLocaleDateString([], { timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric' });
      if (duedate < todayDate) {
        dateProximityMsg = 'OVERDUE';
        dateProximityStyle = { background: '#ec9488', padding: '2px', color: 'white'};
      }
      const timeDiff = Math.abs(duedate.getTime() - todayDate.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (daysDiff <= 3) {
        dateProximityMsg = 'DUE SOON';
        dateProximityStyle = { background: '#e6c60d', padding: '2px', color: 'black'};
      }
    }
    else {
      readableDuedate = "None!";
    }

    const dateProximitySpan = <span id="dateProximity" style={dateProximityStyle}>{dateProximityMsg}</span>;

    const duedateDisplay = 
      <div className="duedate-display">
        <span>{readableDuedate}</span>{dateProximitySpan}
        <button onClick={this.toggleDuedateForm} id="change-duedate-button">Change</button>
        {duedate? <button onClick={this.removeDuedate} id="remove-duedate-button">Remove</button> : null}
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