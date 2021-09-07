const cartaUm = document.getElementById("carta-1")
const cartaDois = document.getElementById("carta-2")
const cartaTres = document.getElementById("carta-3")
const cartaQuatro = document.getElementById("carta-4")
const cartaCinco = document.getElementById("carta-5")
const cartaSeis = document.getElementById("carta-6")
const cartaSete = document.getElementById("carta-7")
const cartaOito = document.getElementById("carta-8")
const cartaNove = document.getElementById("carta-9")
const cartaDez = document.getElementById("carta-10")
const cartaOnze = document.getElementById("carta-11")
const cartaDoze = document.getElementById("carta-12")
const cartaTreze = document.getElementById("carta-13")
const cartaCatorze = document.getElementById("carta-14")
const cartaQuinze = document.getElementById("carta-15")
const cartaDezesseis = document.getElementById("carta-16")
const cartaDezessete = document.getElementById("carta-17")
const cartaDezoito = document.getElementById("carta-18")
const cartaDezenove = document.getElementById("carta-19")
const cartaVinte = document.getElementById("carta-20")

var arrayCards = [cartaUm, cartaDois, cartaTres, cartaQuatro, cartaCinco, cartaSeis, cartaSete, cartaOito, cartaNove, cartaDez,
cartaOnze, cartaDoze, cartaTreze, cartaCatorze, cartaQuinze, cartaDezesseis, cartaDezessete, cartaDezoito, cartaDezenove, cartaVinte];

var randomCards = arrayCards [Math.floor(Math.random()*arrayCards.length)];

//Script to flip the card

const cards = document.querySelectorAll('.slot-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

console.log(randomCards);




