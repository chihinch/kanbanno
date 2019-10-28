import React from 'react';

import ListFormContainer from './list_form';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
  }

  renderLists() {
    const listItems = this.props.lists.map((list) => {
      return <li className="list-list-item" key={`list-index-${list.id}`}>{list.title}</li>
    });

    return (
      <ul className="lists-list">
        {listItems}
      </ul>
    );
  }

  render() {
    return (
      <div className = 'list-index-container'>
        {this.renderLists()}
        <ListFormContainer />
      </div>
    )
  }
}