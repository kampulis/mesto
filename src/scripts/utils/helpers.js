import { Card } from '../Cards.js';
import { popupWithImage } from './constants.js';

export function createCard(name, link, likes) {
  const card = new Card(
    { name, link, likes },
    '#mesto-card',
    (e) => popupWithImage.open(e),
  );
  return card.createMestoCard();
}
