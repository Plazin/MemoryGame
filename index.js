//Script to flip the card

const cards = document.querySelectorAll('.slot-card');

function flipCard() {
  return this.classList.toggle('flip'); 
}

const flipCard2 = () => 
this.classList.toggle('flip');

cards.forEach(card => card.addEventListener('click', flipCard));
