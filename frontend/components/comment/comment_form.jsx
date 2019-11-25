import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  const authorId = state.session.id;
  return {
    authorId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);