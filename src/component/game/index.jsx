import React, { useState } from 'react';
import Image from './Image';
import Options from './Options';
import generatePrompt from '../../logic/generate-prompt';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Game(props) {
  const [value, setValue] = useState('');
  const [monsters, setMonsters] = useState(generatePrompt());
  let answerMonster = monsters.find(monster => {
    return monster.answer;
  });;

  function answerSubmitted(monster) {
    const results = {
      answer: answerMonster,
      submission: monster
    };
    setValue(monster.name)
    props.history.push(results);
    props.historyChanged(props.history);
  }

  function nextQuestion() {
    setValue('');

    if (props.history.length > props.totalQuestions) {
      props.finishedHandler();
    } else {
      const newMonsters = generatePrompt();
      setMonsters(newMonsters);
      answerMonster = newMonsters.find(monster => {
        return monster.answer;
      });
    }
  }

  function getButtonText() {
    return props.history.length > props.totalQuestions ?
      'Finish' :
      'Next';
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Who's That Pokemon?
      </Typography>
      <Image 
        image={answerMonster.src}
        revealMonster={value} />
      <Options
        monsters={monsters}
        changeHandler={answerSubmitted}
        value={value}/>
      { value ?  
          <Button onClick={nextQuestion} variant="contained">{ getButtonText() }</Button> :
          null
      }
    </div>
  );
}
