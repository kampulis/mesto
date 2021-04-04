const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const element = document.querySelector('.elements');
const template = document.querySelector('#mesto-card');

function createMestoCard(name, link) {
  const newCard = template.content.cloneNode(true);
  newCard.querySelector('.mesto-card__photo').src = link;
  newCard.querySelector('.mesto-card__photo').alt = name;
  newCard.querySelector('.mesto-card__subtitle-name').textContent = name;
  newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', addLike);
  newCard.querySelector('.mesto-card__trash').addEventListener('click', deleteCard);
  newCard.querySelector('.mesto-card__photo').addEventListener('click', showPhoto);
  return newCard;
};

initialCards.forEach(function (card) {
  element.prepend(createMestoCard(card.name, card.link));
});
