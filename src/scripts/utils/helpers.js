import { Card } from '../Cards.js';
import { popupWithImage } from './constants.js';

export function createCard(name, link) {
  const card = new Card(
    { name, link },
    '#mesto-card',
    (e) => popupWithImage.open(e),
  );
  return card.createMestoCard();
}
