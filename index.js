let gameOn = new Game (cards)
// console.log(cards);
// console.log(gameOn.cards);

//Game set up

gameOn.shuffleCards (gameOn.cards);
gameOn.pick12Cards();
gameOn.renderCards(gameOn.displayedCards);
// gameOn.setTimer();
let display = document.querySelector("#remaining-time")
let duration = 60 * 10;
gameOn.startTimer(duration, display)
// Game mechanism
// Add click event to card image
document.querySelectorAll(".emoji").forEach(function (image){image.addEventListener('click', function(event){
    gameOn.selectCard(event,gameOn)
} )})

// startTimer (gameOn.remainingTime, 0)
// gameOn.selectCard()
// gameOn.renderCards(cards);
// // console.log(gameOn.cards);
// console.log(gameOn.displayedCards);
gameOn.checkIfSet(gameOn.selectedCards)
// console.log(gameOn.selectedCards)
// console.log(gameOn.checkIfSet(gameOn.selectedCards))


//   displayed cards is an array using pop to remove card from deck