import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class Result extends React.Component {
  static propTypes = {
    history: PropTypes.array,
    resetHandler: PropTypes.func
  }
  trainerType = ['Crusty Juggler', 'Bug Catcher', 'Average', 'Cool Boy', 'Pokemon Trainer', 'Pokemon Master']

  handleReset = () => {
    this.props.resetHandler();
  }

  getTotalCorrect = () => {
    let totalCorrect = 0;

    this.props.history.forEach(question => {
      if (question.answer.name === question.submission.name) {
        totalCorrect++;
      }
    });

    return totalCorrect;
  }

  render() {
    return (
      <div>
        <h1>You are a { this.trainerType[this.getTotalCorrect()] }</h1>
        <p>{this.getTotalCorrect()} / {this.props.history.length}</p>
        <Button variant="contained" onClick={this.handleReset}>Try Again?</Button>
      </div>
    )
  }
}