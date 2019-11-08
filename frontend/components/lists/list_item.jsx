import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

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
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur();
    }
  }

  updateListTitle() {
    if (!this.state.title) {
      this.setState({ title: this.props.list.title });
      return;
    }
    if (this.state.title === this.props.list.title) return;
    this.props.updateList(this.props.boardId, this.state);
  }

  render() {
    return (
      <Draggable
        draggableId={`list-${this.props.list.id}`}
        index={this.props.dragIdx}
        type="LIST"
      >
        {(provided, snapshot) => (
          <div 
            className="list-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div className="list-item-contents">
              <div 
                className="list-item-header"
                {...provided.dragHandleProps}
              >
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
        )}
      </Draggable>
    );
  }
};

export default connect(null, mapDispatchToProps)(ListItem);
