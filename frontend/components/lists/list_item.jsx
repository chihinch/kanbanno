import React from 'react';

import { connect } from 'react-redux';
import { updateList } from '../../actions/list_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (boardId, list) => dispatch(updateList(boardId, list))
  }
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.list.id,
      title: props.list.title
    };

    this.update = this.update.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
    this.updateListTitle = this.updateListTitle.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleKeyEscaper(e) {
    // debugger
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur();
      // this.updateListTitle();
    }
  }

  updateListTitle() {
    // console.log("I pressed the esc key");
    // debugger
    this.props.updateList(this.props.boardId, this.state);
  }

  render() {
    return (
    <div className="list-item-container">
      <div className="list-item-contents">
        <div className="list-item-header">
          <textarea 
            className="list-name-editor" 
            onKeyDown={this.handleKeyEscaper}
            onBlur={this.updateListTitle} 
            onChange={this.update('title')} 
            value={this.state.title}
          >
          </textarea>
        </div>
        <div className="new-card-container">
          + Add a card
        </div>
      </div>
    </div>
    );
  }
};

export default connect(null, mapDispatchToProps)(ListItem);
