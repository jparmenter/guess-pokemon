import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import './index.css';

const useStyles = makeStyles(() => ({
  group: {
    textTransform: 'capitalize'
  }
}));

export default function Options(props) {
  const classes = useStyles();

  function handleChange(event) {
    const monster = props.monsters.find(mon => { return mon.name === event.target.value });
    props.changeHandler(monster);
  }
  
  function createQuestions(monsters) {
    let questions = [];

    for (let i = 0; i < monsters.length; i++) {
      const monster = monsters[i];

      questions.push(
        <FormControlLabel 
          className={getLabelClass(monster)}
          value={monster.name}
          control={<Radio />}
          label={monster.name}/>
      );
    }

    return questions;
  }

  function getLabelClass(monster) {
    if (!props.value) {
      return '';
    }

    return monster.answer ?
      'correct' :
      'incorrect';
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          className={classes.group}
          aria-label="pokemon"
          name="pokemon"
          value={props.value}
          onChange={handleChange}
        >
          { createQuestions(props.monsters) }
        </RadioGroup>
      </FormControl>
    </div>
  );
}