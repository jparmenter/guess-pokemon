import Pokemon from '../data/pokemon.json';

export default function generatePrompt() {
  const monsterLength = Pokemon.length - 1;
  
  return [
    Pokemon[getRandomIntInclusive(0, monsterLength)],
    Pokemon[getRandomIntInclusive(0, monsterLength)],
    Pokemon[getRandomIntInclusive(0, monsterLength)],
    Pokemon[getRandomIntInclusive(0, monsterLength)]
  ]
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}