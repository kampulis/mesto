import { Card } from '../components/Cards.js';
import { popupWithImage, popupSubmit, api } from '../../pages/index';

export function createCard(name, link, likes, id, owner, currentUser) {
  const card = new Card(
    api,
    { name, link, likes, id, owner },
    currentUser,
    '#mesto-card',
    popupWithImage.open,
    popupSubmit.open,
    popupSubmit.close,
  );
  return card.createMestoCard();
}
