// Script to randomize the cards in array

var arrayCards = new Array();

arrayCards[0] = new Image();
arrayCards[0].src = '/images/carta1.png';

arrayCards[1] = new Image();
arrayCards[1].src = '/images/carta2.png';

arrayCards[2] = new Image();
arrayCards[2].src = '/images/carta3.png';

arrayCards[3] = new Image();
arrayCards[3].src = '/images/carta4.png';

arrayCards[4] = new Image();
arrayCards[4].src = '/images/carta5.png';

arrayCards[5] = new Image();
arrayCards[5].src = '/images/carta6.png';

arrayCards[6] = new Image();
arrayCards[6].src = '/images/carta7.png';

arrayCards[7] = new Image();
arrayCards[7].src = '/images/carta8.png';

arrayCards[8] = new Image();
arrayCards[8].src = '/images/carta9.png';

arrayCards[9] = new Image();
arrayCards[9].src = '/images/carta10.png';

const arrayRandomCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Script to flip the card & Logic game settings

const cards = document.querySelectorAll('.slot-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
   this.classList.add('flip'); 

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

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
}

// The timer to flip the card again, if the cards does not match each other

function unflipCards(){
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1000);  
}

// The click action on the card
cards.forEach(card => card.addEventListener('click', flipCard));


