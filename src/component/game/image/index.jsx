import React from 'react';
import PropTypes from "prop-types";
import './index.css';

export default class Image extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    selecteMonster: PropTypes.string
  }
  
  render() {
    return (
      <img 
        className={this.props.selectedMonster ? '' : 'silhouette'}
        src={this.props.image}
        alt="Guess a Pokemon" />
    )
  }
}