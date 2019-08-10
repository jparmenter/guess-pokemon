import React from 'react';
import Game from './Game';
import Results from './Results';
import './App.css';

export default class App extends React.Component {
  totalQuestions = 4;
  state = {
    history: [],
    showResults: false
  };

  updateHistory = history => {
    this.setState({
      history
    });
  }

  resetGame = () => {
    this.setState({
      history: [],
      showResults: false
    });
  }

  showResults = () => {
    this.setState({
      showResults: true
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.showResults ?
            <Results
              history={this.state.history}
              resetHandler={this.resetGame}/> :
            <Game
              finishedHandler={this.showResults}
              history={this.state.history}
              historyChanged={this.updateHistory}
              totalQuestions={this.totalQuestions}/>
        }
      </div>
    );
  }
}
