import './style.css'
import { Deck } from './deck.js'

const deck = new Deck();
let cardsDrawn = 0;

function drawCard(event) {
  event.preventDefault();
  const card = deck.drawCard();
  if (card && cardsDrawn < 3) {
    console.log(card);
    const landingZones = document.querySelectorAll('.landing-zone');
    const img = document.createElement('img');
    img.src = card.img;
    img.alt = card.name;
    landingZones[cardsDrawn].appendChild(img);
    cardsDrawn++;
  }
  if (cardsDrawn >= 3) {
    document.querySelector('#draw-card').disabled = true;
    console.log('No more cards can be drawn.');
  }
}

function shuffleDeck() {
  deck.shuffle();
  console.log('Deck shuffled.');
}

function resetDeck() {
  deck.reset();
  console.log('Deck reset.');
  document.querySelector('#card-deck').src = '/images/card-back.png';
  document.querySelector('#draw-card').disabled = false;
  cardsDrawn = 0;
  document.querySelectorAll('.landing-zone').forEach(zone => {
    zone.innerHTML = ''; // Clear landing zones
  });
}


document.querySelector('#app').innerHTML = `
  <div id="main-container">
    <div class="section-container">
      <img id="card-deck" src="/images/card-back.png"/>
      <div class="landing-zone"></div>
      <div class="landing-zone"></div>
      <div class="landing-zone"></div>
    </div>
    <div class="button-container">
      <button id="draw-card">Draw Card</button>
      <button id="shuffle-deck">Shuffle Deck</button>
      <button id="reset-deck">Reset Deck</button>
    </div>
  </div>
`

document.querySelector('#draw-card').addEventListener('click', drawCard);
document.querySelector('#shuffle-deck').addEventListener('click', shuffleDeck);
document.querySelector('#reset-deck').addEventListener('click', resetDeck);
