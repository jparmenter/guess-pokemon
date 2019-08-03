import React from 'react';
import Game from './Game';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Who's That Pokemon?</h1>
        <Game/>
      </div>
    );
  }
}
