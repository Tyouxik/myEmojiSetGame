let gameOn = new Game(cards)
// console.log(cards);
// console.log(gameOn.cards);



//Game set up

gameOn.shuffleCards(gameOn.cards);
gameOn.pick12Cards();
gameOn.renderCards(gameOn.displayedCards);

let display = document.querySelector("#remaining-time")
let duration = 60 * 10;
gameOn.startTimer(duration, display)

// Add click event to card image (keep it here)
document.querySelectorAll(".emoji").forEach(function (image) {
    image.addEventListener('click', function (event) {
        gameOn.selectCard(event, gameOn)
        if (gameOn.selectedCards.length === 3) {

            const result = gameOn.checkIfSet(gameOn.selectedCards);
            // console.log(result)
            if (result) {
                //what function if true?
                gameOn.isASet()//ok
            } if (result === false) {
                // I want to add a little delay
                setTimeout(gameOn.isNotASet(), 10000) //setTimeout doesn't work
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

// Everytime gameOn.selectedCards. length === 3, run checkIfSet on the array.
// if (gameOn.checkIfSet(gameOn.selectedCards) && gameOn.selectedCards) {
//     console.log("This is a set")
// } else if (!gameOn.checkIfSet(gameOn.selectedCards) && gameOn.selectedCards){
//     console.log("This is not a set")}



// startTimer (gameOn.remainingTime, 0)
// gameOn.selectCard(event,gameOn)
// gameOn.renderCards(cards);
// // console.log(gameOn.cards);
// console.log(gameOn.displayedCards);
// gameOn.checkIfSet(gameOn.selectedCards);
// console.log(gameOn.selectedCards)
// console.log(gameOn.checkIfSet(gameOn.selectedCards))


//   displayed cards is an array using pop to remove card from deck
