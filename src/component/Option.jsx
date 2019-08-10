import React from 'react';
import PropTypes from 'prop-types';
import './Option.css'

export default class Option extends React.Component {
  static propTypes = {
    changeHandler: PropTypes.func,
    monster: PropTypes.object,
    stage: PropTypes.number,
    selectedMonster: PropTypes.string
  }

  handleChange = () => {
    this.props.changeHandler(this.props.monster);
  }

  getLabelClass = () => {
    if (!this.props.selectedMonster) {
      return '';
    }

    return this.props.monster.answer ?
    'answer' :
    'incorrect'
  }

  render() {
    return (
      <li>
        <label 
          className={this.getLabelClass()}>
          <input
            onChange={this.handleChange}
            name="guess-input"
            type="radio"
            checked={this.props.selectedMonster === this.props.monster.name}
            value={this.props.monster.name}/>
            {this.props.monster.name}
        </label>
      </li>
    );
  }
}