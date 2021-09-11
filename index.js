document.getElementsByTagName("body")[0].onload = function (){
  shuffle()
}

//Script to flip the card & Logic game settings

const cards = document.querySelectorAll('.slot-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if(lockBoard) return;
  if (this === firstCard) return;

   this.classList.add('flip'); 

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();

}

// If the cards are the same, they stand still

function checkForMatch(){
  if (firstCard.dataset.framework === secondCard.dataset.framework){
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards(){
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

// The time to flip the card again, if the cards does not match each other

function unflipCards(){
    lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

     resetBoard();
  }, 1000);  
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Script to randomize all cards (In this function all in "const cards" in reference to .slot-card get random positions)

function shuffle() {

  cards.forEach(card => {
  let randomPlace = Math.floor(Math.random() * 20);
    card.style.order = randomPlace;
  });

}

// The click action on the card
cards.forEach(card => card.addEventListener('click', flipCard));

// The Timer in Game

//if (cards.forEach(card => card.addEventListener('click', flipCard)) = true ){

//  var timer = new timer();
//  timer.start();
  
 // timer.addEventListener('secondsUpdated', function (e) {
 //     $('#basicUsage').html(timer.getTimeValues().toString());
//  });

//}

