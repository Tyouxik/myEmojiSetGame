// VARIABLES s
class Game {
    constructor() {
        this.cards = getDeck2();
        this.displayedCards = [];
        this.selectedCards = [];
        this.selectedIndex = [];
        this.discartedCards = [];
        this.foundSets = 0;
        this.remainingTime = 600;
    }
    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    shuffleCards() {
        for (let i = 0; i < 1400; i++) {
            let location1 = Math.floor((Math.random() * this.cards.length));
            let location2 = Math.floor((Math.random() * this.cards.length));
            let tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
    
    pick(number) {
        for (let i = 0; i < number; i++) {
            this.displayedCards.push(this.nextCard());
        }
    }
    nextCard() {
       return this.cards.pop()
    }
    checkIfSet(array) {
        if (array.length === 0) { return false };
        if (array.length === 3) {
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
                if (checkAllSameColor || checkAllDiffColor) {
                    if (checkAllSameNumber || checkAllDiffNumber) {
                        if (checkAllSameShadow || checkAllDiffShadow) {
                            console.log("This is true")
                            return true
                        }

                    }
                }
            }
            console.log("This is false")
            return false
        }
    }
    selectCard(event) {
        const image = event.target;
        const cardDiv = event.target.parentNode;
        const cardIndex = event.target.parentNode.id

        if (cardDiv.classList.contains('selected')) {
            cardDiv.classList.remove('selected');
            this.selectedCards.pop(this.displayedCards[cardIndex])

        } else if (!cardDiv.classList.contains('selected') && this.selectedCards.length < 3) {
            cardDiv.classList.add('selected');
            this.selectedCards.push(this.displayedCards[cardIndex]);
        }
    }
    renderCards() {
        // create constants for all query
        // add eventListener to new append cards
        const setBoard1 = document.querySelector('#set-board-1');
        const setBoard2 = document.querySelector('#set-board-2');
        const setBoard3 = document.querySelector('#set-board-3');
        
        setBoard1.innerHTML = '';
        setBoard2.innerHTML = '';
        setBoard3.innerHTML = '';

        for (let i = 0; i < this.displayedCards.length; i++) {
            let card = document.createElement("div")
            let image = `<img class='emoji' src="images/${this.displayedCards[i].image}" alt="${this.displayedCards[i].image}">`
            card.innerHTML = image;
            card.classList.add('card');
            card.setAttribute('id', i);
            if (i < 4) {
                setBoard1.appendChild(card)
            }
            else if (i < 8) {
                setBoard2.appendChild(card)
            }
            else if (i < 12) {
                setBoard3.appendChild(card)
            }

        }
    }

    isASet() {
        console.log('This is a set')
        // Add 1 to found set counter
        this.foundSets++
        document.querySelector('#sets-found').innerHTML = this.foundSets
         //Remove selected cards
        const selectedCardElements = document.querySelectorAll(".selected");
       
        for (let i = 0; i < 3; i++) {
        let cardIndex = selectedCardElements[i].getAttribute("id");
        this.displayedCards.splice(cardIndex, 1, this.nextCard());
        console.log(this.displayedCards) 
        console.log(this.selectedCards)
        }
        

            // remove selectedCards from displayed cards
        // add 1 to counter this.foundSets ++
        console.log('This is a set')//
    }
    isNotASet() { 
        
        const selectedCard = document.querySelectorAll(".selected")
        gameOn.selectedCards = [];            
        console.log(selectedCard)
        for (let i = 0; i < selectedCard.length; i++) {
            selectedCard[i].classList.remove("selected");
        }
    }
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
