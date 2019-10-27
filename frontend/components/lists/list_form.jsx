import React from 'react';
import { connect } from 'react-redux';

import createList from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state) => {
  return {title: ''};
};

const mapDispatchToProps = () => {

};

class ListForm extends React.Component {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);