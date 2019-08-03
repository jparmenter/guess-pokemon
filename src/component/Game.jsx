import React from 'react';
import Image from './Image';
import generatePrompt from '../logic/generate-prompt';

export default class Game extends React.Component {
  createQuestions = (monsters) => {
    let questions = [];

    for (let i = 0; i < monsters.length; i++) {
      questions.push(
        <li>
          <label>
            <input type="radio"/> {monsters[i].name}
          </label>
        </li>
      );
    }

    return questions;
  }

  render() {
    const monsters = generatePrompt();

    return (
      <div>
        <Image image={monsters[0].src}/>
        <ul>{this.createQuestions(monsters)}</ul>
      </div>
    );
  }
}
