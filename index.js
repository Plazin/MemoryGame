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

// Variables to make the pair card counting

  let pairs = `00/10`
  var contador = `00`
  let countingDisplay = document.querySelector(`[data-pair-counting]`)

  let score = `0`
  var multiplicador = `0`
  let scoreDisplay = document.querySelector(`[data-score-counting]`)

// If the cards are the same, they stand still & If the cards match each other, it changes the pair card counting

function checkForMatch(){
  if (firstCard.dataset.framework === secondCard.dataset.framework){
    disableCards();

    // pair card counting
    pairs = `${contador}/10`
    contador ++;
    countingDisplay.textContent = `${contador}/10`

    // score counting
    score = `${multiplicador}`
    multiplicador ++;
    scoreDisplay.textContent = `${multiplicador}0`

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

(() => {

  let miliseconds = `00`,
      minutes = `00`,
      seconds = `00`,
      chronometerDisplay = document.querySelector(`[data-chronometer]`),
      chronometerCall

  function chronometer() {

    miliseconds ++

    if (miliseconds >= 9) {
      miliseconds = `00`
      seconds ++
    } 

    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
      seconds = `00`
      minutes ++

      if (minutes < 10) minutes = `0` + minutes
    }

    chronometerDisplay.textContent = `${minutes}:${seconds}:${miliseconds}`

  }

  play.onclick = (event) => {
    chronometerCall = setInterval(chronometer, 1000)
    event.target.setAttribute(`disabled`,``)
  }

  pause.onclick = () => {
    clearInterval(chronometerCall)
    play.removeAttribute(`disabled`)
  }
  
})();

// Script to reaload the page when press the button reset

(() => {
  setTimeout(() => { 
  document.getElementsByTagName("body")[0].style.backgroundColor = 'none';
  }, 50)
})();

function sampleFunction() {
 location.reload();
};

