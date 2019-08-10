import Pokemon from '../data/pokemon.json';

export default function generatePrompt() {
  const monsterLength = Pokemon.length - 1;
  const options = [];
  const selectedAnswer = getRandomIntInclusive(0, 3);

  for (let i = 0; i < 4; i++) {
    const index = getRandomIntInclusive(0, monsterLength);
    options.push({
      ...Pokemon[index],
      answer: selectedAnswer === i,
      index
    });
  }
  
  return options;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}