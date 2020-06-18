let gameOn = new Game();
// console.log(cards);
// console.log(gameOn.cards);



//Game set up

gameOn.shuffleCards();
gameOn.pick(12);
gameOn.renderCards();

let display = document.querySelector("#remaining-time")
let duration = 60 * 10;
gameOn.startTimer(duration, display)

// Add click event to card image (keep it here)
const cardImages = document.querySelectorAll(".emoji")
cardImages.forEach(function (image) {
    image.addEventListener('click', function (event) {
        gameOn.selectCard(event)
        if (gameOn.selectedCards.length === 3) {

            const result = gameOn.checkIfSet(gameOn.selectedCards);
            // console.log(result)
            if (true) { //careful I have to change that to result
                gameOn.isASet();
                gameOn.renderCards();
                // add eventListener click select cards
            } if (result === false) {
                // I want to add a little delay
                setTimeout(gameOn.isNotASet.bind(gameOn), 1000) //setTimeout doesn't work
            }
        }
    })

})


// let cardIndex = document.querySelectorAll(".selected")[0].getAttribute(id);
// console.log(document.querySelectorAll(".selected")[0].getAttribute("id"))
// Game mechanism

//gameOn.isASet();

// Find a set
// Player select 3 cards
// When 3 cards are selected, gameOn.checkIFset(gameOn.selectedCards)
// If checkIfSet returns true, foundSet()

// startTimer (gameOn.remainingTime, 0)
// gameOn.selectCard(event,gameOn)
// gameOn.renderCards(cards);
// // console.log(gameOn.cards);
// console.log(gameOn.displayedCards);
// gameOn.checkIfSet(gameOn.selectedCards);
// console.log(gameOn.selectedCards)
// console.log(gameOn.checkIfSet(gameOn.selectedCards))


//   displayed cards is an array using pop to remove card from deck
