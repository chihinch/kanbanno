import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="card-comments">
      <div className="card-comments-header">
        <span className="card-large-icon"><FontAwesomeIcon icon={faComments} /></span>
        <h3>Comments</h3>
      </div>
    </div>
  }
};