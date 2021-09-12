import { Card } from '../components/Cards.js';
import { popupWithImage, popupSubmit, api } from '../../pages/index';

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
