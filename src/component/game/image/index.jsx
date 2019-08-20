import React from 'react';
import './index.css';

export default function Image(props) {
  return (
    <img 
      className={props.revealMonster ? '' : 'silhouette'}
      src={props.image}
      alt="Guess a Pokemon" />
  )
}