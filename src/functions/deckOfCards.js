import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses'

const numberOfCards = 8;

export default () => {
  const fontAwesomeClasses = FontAwesomeClasses();
  let cards = [];

  while (cards.length < numberOfCards) {
    const index = Math.floor(Math.random * fontAwesomeClasses.length);
    const card = {
      icono: fontAwesomeClasses.splice(index, 1)[0],
      found: false
    };
    cards.push(card);
    cards.push({...card}); 
  }
  return shuffle(cards);
}