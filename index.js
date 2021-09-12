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

(() => {

  let hours = `00`,
      minutes = `00`,
      seconds = `00`,
      chronometerDisplay = document.querySelector(`[data-chronometer]`),
      chronometerCall

  function chronometer() {

    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
      seconds = `00`
      minutes ++

      if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
      minutes = `00`
      hours ++
      
      if (hours < 10) hours = `0` + hours
    }

    chronometerDisplay.textContent = `${hours}:${minutes}:${seconds}`

  }

  play.onclick = (event) => {
    chronometerCall = setInterval(chronometer, 1000)
    event.target.setAttribute(`disabled`,``)
  }

  pause.onclick = () => {
    clearInterval(chronometerCall)
    play.removeAttribute(`disabled`)
  }
  
})()

// Script to reaload the page when press the button reset

(() => {
  setTimeout(() => { 
  document.getElementsByTagName("body")[0].style.backgroundColor = 'lightgreen';
  }, 50)
})();
function sampleFunction() {
 location.reload();
}

