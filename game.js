// VARIABLES
class Game {
    constructor (cards) {
        this.cards = cards.slice();
        this.displayedCards = [];
        this.selectedCards = [
            {
                type: 'cool',
                color: 'yellow',
                number: 1,
                shadow: 'left',
                image: ''
              },
              {
                type: 'cool',
                color: 'blue',
                number: 1,
                shadow: 'right',
                image: ''
              },
              {
                type: 'cool',
                color: 'yellow',
                number: 1,
                shadow: 'none',
                image: ''
              }
          ];
        this.foundSets = 0;
        this.remainingTime = 10;
    }

    shuffleCards () {
        for (let i = 0; i < 100; i++) {
            let location1 = Math.floor((Math.random() * this.cards.length));
            let location2 = Math.floor((Math.random() * this.cards.length));
            let tmp = cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
    pickACard (){
        this.displayedCards.push (this.cards.pop())       
    }
    pick12Cards () {
        for (let i = 0; i < 12; i++) {
            this.displayedCards.push (this.cards.pop());
        }
    }
    checkIfSet(array) {
        let checkAllSameType = 
            array[0].type === array[1].type
            && array[1].type === array[2].type;
        let checkAllSameColor = 
            array[0].color === array[1].color
            && array[1].color === array[2].color;
        let checkAllSameNumber = 
            array[0].number === array[1].number
            && array[1].number === array[2].number;
        let checkAllSameShadow = 
            array[0].shadow === array[1].shadow
            && array[1].shadow === array[2].shadow;
        let checkAllDiffType = 
            array[0].type !== array[1].type
            && array[1].type !== array[2].type
            && array[0].type !== array[2].type;
        let checkAllDiffColor = 
            array[0].color !== array[1].color
            && array[1].color !== array[2].color
            && array[0].color !== array[2].color;
        let checkAllDiffNumber = 
            array[0].number !== array[1].number
            && array[1].number !== array[2].number
            && array[0].number !== array[2].number;
        let checkAllDiffShadow = 
            array[0].shadow !== array[1].shadow
            && array[1].shadow !== array[2].shadow
            && array[0].shadow !== array[2].shadow;
        
        if (checkAllSameType || checkAllDiffType) {
          if(checkAllSameColor || checkAllDiffColor) {
            if(checkAllSameNumber || checkAllDiffNumber) {
              if(checkAllSameShadow || checkAllDiffShadow) {
                  console.log("This is true")
                return true
              }
              
            }
          }
        }
            console.log("This is false")
          return false
    }
    selectCard(event,game) {
        console.log(event,game)
        const image = event.target;
        const cardDiv = event.target.parentNode;
        const cardIndex = event.target.parentNode.id
        let selectedCards = this.selectedCards;
        if(cardDiv.classList.contains('selected')) {
            cardDiv.classList.remove('selected')
        } else {
            cardDiv.classList.add('selected');
        }
        // this.selectedCards.push('Hello world')
        // console.log(this.selectedCards)
        // console.log(this.displayedCards[cardIndex]);
        
        // when I click on a div,
        // add class selected to the div
        // add corresponding card to selectedCards
        // player cannot select more than 3 cards
    }

    renderCards (array) {
      
        
        for (let i = 0;  i < array.length; i++) {
            let card = document.createElement("div")
            let image = `<img class='emoji' src="images/${array[i].image}" alt="${array[i].image}">`
            card.innerHTML = image;
            card.classList.add('card');
            card.setAttribute('id', i);
            if (i < 4) {
                document.querySelector('#set-board-1').appendChild(card)
            }
            else if (i < 8) {
                document.getElementById('set-board-2').appendChild(card)
            }
            else if (i < 12) {
                document.getElementById('set-board-3').appendChild(card)
            }

        }
    }
    

    //
    // selectCards {}

    // checkIfSet(selectedArray) {}
    // isFinished {}
}



// Landpage
// Shuffle cards
// Displayed cards are an array

// Game sequence
// choose 12 cards -> seperate array -> display (DOM manipulation)
// Shuffle deck
// Start timer countdown
// Found set = 0; 
// Display cards in a 3 x 4
// Player select 3 cards by click with the mouse, highlight cards on the grid
// 3 selected cards are checked
    // if it is a set, cards are removed, add +1 to set counter
    // replace empty spot with new cards
    // it is not a set, put cards back on the grid 
// When time is up, number of sets found + button to start a new again or bring back to landpage 

// OPTIONAL
// Clue: