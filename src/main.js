import './style.css'
import { Deck } from './deck.js'

const deck = new Deck();
console.log(deck.length);
console.log(deck.drawCard());
console.log(deck.length);
console.log(deck.cards[0].name);
console.log(deck.shuffle());
console.log(deck.length);
console.log(deck.cards[0].name);
console.log(deck.length);
console.log(deck.reset());
console.log(deck.length);



document.querySelector('#app').innerHTML = `
  <div id="main-container">
    <div class="section-container">
      <img id="card-deck" src="/images/card-back.png"/>
      <div class="landing-zone"></div>
      <div class="landing-zone"></div>
      <div class="landing-zone"></div>
    </div>
    <div class="button-container">
      <button id="draw-card" onClick="drawCard()">Draw Card</button>
      <button id="shuffle-deck" onClick="shuffleDeck()">Shuffle Deck</button>
      <button id="reset-deck" onClick="resetDeck()">Reset Deck</button>
    </div>
  </div>
`

