import { React } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      description: this.props.card.description
    };
  }

  render() {
    
  }
}
