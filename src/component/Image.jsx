import React from 'react';
import PropTypes from "prop-types";
import './Image.css';

export default class Image extends React.Component {
  static propTypes = {
    image: PropTypes.string
  }
  
  render() {
    return (
      <img class="image" src={this.props.image} alt="Guess a Pokemon" />
    )
  }
}