import React from 'react';
import PropTypes from 'prop-types'
import Image from './Image';
import Options from './Options';
import generatePrompt from '../../logic/generate-prompt';

export default class Game extends React.Component {
  monsters;
  answerMonster;
  state = {
    selectedMonster: ''
  };
  static propTypes = {
    history: PropTypes.array,
    historyChanged: PropTypes.func,
    finishedHandler: PropTypes.func,
    totalQuestions: PropTypes.number
  }

  answerSubmitted = monster => {
    const results = {
      answer: this.answerMonster,
      submission: monster
    };
    this.setState({
      selectedMonster: monster.name
    });
    this.props.history.push(results);
    this.props.historyChanged(this.props.history);
  }

  nextQuestion = () => {
    this.setState({
      selectedMonster: ''
    });

    if (this.props.history.length > this.props.totalQuestions) {
      this.props.finishedHandler();
    }
  }

  getButtonText = () => {
    return this.props.history.length > this.props.totalQuestions ?
      'Finish' :
      'Next';
  }

  render() {
    if (!this.state.selectedMonster) {
      this.monsters = generatePrompt();
      this.answerMonster = this.monsters.find(monster => {
        return monster.answer;
      });
    }

    return (
      <div className="game">
        <h1>Who's That Pokemon?</h1>
        <Image 
          image={this.answerMonster.src}
          selectedMonster={this.state.selectedMonster} />
        <Options
          monsters={this.monsters}
          changeHandler={this.answerSubmitted}
          selectedMonster={this.state.selectedMonster}/>
        { this.state.selectedMonster ?  
            <button onClick={this.nextQuestion} type="button">{ this.getButtonText() }</button> :
            null
        }
      </div>
    );
  }
}
