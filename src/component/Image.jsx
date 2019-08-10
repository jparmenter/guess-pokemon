import React from 'react';
import PropTypes from "prop-types";
import './Image.css';

export default class Image extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    selecteMonster: PropTypes.string
  }
  
  render() {
    return (
      <img 
        className={this.props.selecteMonster ? '' : 'silhouette'}
        src={this.props.image}
        alt="Guess a Pokemon" />
    )
  }
}