import { fullDeck, partialDeck } from './constants.js';
import _ from 'lodash';

class Card {
  constructor(name) {
    this.id = _.uniqueId('card-');
    this.name = name;
    this.img = `images/${name.toLowerCase().replace(/\s+/g, '-')}.png`;
  }


}

export class Deck {
  constructor(type = 'full') {
    this.cards = [];
    this.create(type);
  }

  create(type) {
    this.cards = (type === 'full' ? fullDeck : partialDeck).map(name => new Card(name));
    this.shuffle();
  }
  get length() {
    return this.cards.length;
  }

  peak() {
    return this.cards[0];
  }

  drawCard() {
    return this.cards.shift();
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
    return this.cards;
  }

  reset() {
    this.create();
    return this.cards;
  }
}