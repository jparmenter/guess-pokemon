import React from 'react';
import Option from './Option';
import PropTypes from 'prop-types';
import './index.css';

export default class Options extends React.Component {
  static propTypes = {
    monsters: PropTypes.array,
    changeHandler: PropTypes.func,
    selectedMonster: PropTypes.string
  }

  handleChange = monster => {
    this.props.changeHandler(monster);
  }
  
  createQuestions = (monsters) => {
    let questions = [];

    for (let i = 0; i < monsters.length; i++) {
      const monster = monsters[i];

      questions.push(
        <Option 
          key={i}
          changeHandler={this.handleChange}
          monster={monster}
          selectedMonster={this.props.selectedMonster}/>
      );
    }

    return questions;
  }

  render() {
    return (
      <ul>{this.createQuestions(this.props.monsters)}</ul>
    );
  }
}