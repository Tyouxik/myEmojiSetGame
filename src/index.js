let gameOn = new Game();
// console.log(cards);
// console.log(gameOn.cards);



//Game set up

gameOn.shuffleCards();
gameOn.pick(12);
gameOn.renderCards();
addClickToCards();

let display = document.querySelector("#remaining-time")
let duration = 60 * 10;
gameOn.startTimer(duration, display)

// Add click event to card image (keep it here)
// console.log(document.querySelector("body > main").classList.add('hidden'))

// All the action done by the click event on card images
function clickAction (event) {
    console.log("now Here I am")
    // Select cards
    gameOn.selectCard(event);

    // When 3 cards are selected, the set is checked by CheckIfSet:
    if (gameOn.selectedCards.length === 3) {

        const result = gameOn.checkIfSet(gameOn.selectedCards);
        // If the 3 cards are a set, cards are removed and replaced, rendered again, and click event is added.
        if (result) { //careful I have to change that to result
            gameOn.isASet();
            gameOn.renderCards();
            addClickToCards();
        } 
        // It the 3 cards are not a set, the cards are deselected
        if (result === false) {
            setTimeout(gameOn.isNotASet.bind(gameOn), 1000)
            gameOn.renderCards();
            addClickToCards();
        } 
    }
    //Update final score displayed in div #game-over
    let finalScore = document.querySelector("#game-over > p > span");
        finalScore.innerText = gameOn.foundSets;
        console.log(gameOn.foundSets)
}

function addClickToCards(){
    const cardImages = document.querySelectorAll(".emoji");
    cardImages.forEach(function (image) {
        image.addEventListener('click', function (event) {
            clickAction(event);
        })
    })
} 


let tryAgainBtn = document.querySelector("#game-over > button");
tryAgainBtn.addEventListener('click', function(event){
    console.log(event);
    window.location.reload();
})

// gameOn.isFinished()
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
