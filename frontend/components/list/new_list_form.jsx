import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: parseInt(ownProps.match.params.boardId),
    title: ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (boardId, list) => dispatch(createList(boardId, list))
  }
};

class NewListForm extends React.Component {
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
    let list;
    list = Object.assign({}, this.state);
    this.props.createList(this.props.boardId, list)
      .then(() => this.setState({title: ""}));
  }

  render() {
    return (
      <div className="list-form-container">
        <form onSubmit={this.handleSubmit} className="list-form">
          <input type="text" 
            value={this.state.title} 
            onChange={this.update('title')}
            className="list-input-title"
            placeholder="Enter list title..." 
          />

          <input type="submit" 
            value="Add List"
            disabled={!this.state.title}
            className="list-input-submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewListForm));