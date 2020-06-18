// Function used to create cards
// Cards features

const types = ['cool', 'hug', 'laugh'];
const colors = ['yellow', 'blue', 'red'];
const numbers = [1, 2, 3];
const shadows = ['left', 'right', 'none']

function getDeck2() {
  let deck = [];
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < shadows.length; l++) {
          let card = {type:types[i], color: colors[j], number: numbers[k], shadow: shadows[l], image: `${types[i]}-${colors[j]}-${numbers[k]}-${shadows[l]}.jpg`};
          deck.push(card);
        }  
      }
    }
  }
  return deck
}

// Biggest challenge integrate a function into the whole structure, 
// and deciding if a function needs an argument or not