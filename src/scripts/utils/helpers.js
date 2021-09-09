import { Card } from '../Cards.js';
import { popupWithImage } from './constants.js';
import { popupSubmit } from './constants.js';
import { api } from './constants.js';

export function createCard(name, link, likes, id, currentUser) {
  const card = new Card(
    api,
    { name, link, likes, id },
    currentUser,
    '#mesto-card',
    popupWithImage.open,
    popupSubmit.open,
  );
  return card.createMestoCard();
}
