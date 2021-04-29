const formElementAddCard = document.querySelector('.popup_type_new-card .popup__input');
const mestoInput = document.querySelector('#mesto');
const linkInput = document.querySelector('#link');
export const popupAdd = document.querySelector(".popup_type_new-card");
const element = document.querySelector('.elements');
const popupProfileOverlay = document.querySelector('.popup.popup_type_edit');
const fullPhoto = document.querySelector('.popup_type_image');
const photoCloseButton = document.querySelector(".popup_type_image .popup__close-icon");



export const initialCards = [
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


class Card {
  constructor(name, link, templateSelector) {
    this.name = name;
    this.link = link;
    this.template = document.querySelector(templateSelector);
  }


  /** Попап добавления новой карточки */

  _addLike(e) {
    e.target.classList.toggle('mesto-card__subtitle-icon_active');
  }

  _deleteCard(e) {
    const card = e.target.closest('.mesto-card');
    card.remove();
  }

  _showPhoto(e) {
    handleOpenPopup(fullPhoto);
    document.querySelector('.popup__card').src = e.target.src;
    document.querySelector('.popup__card').alt = e.target.alt;
    const rod = e.target.closest('.mesto-card');
    const subtitle = rod.querySelector('.mesto-card__subtitle-name');
    document.querySelector('.popup__text').textContent = subtitle.textContent;
  }

  createMestoCard() {
    const newCard = this.template.content.cloneNode(true);
    newCard.querySelector('.mesto-card__photo').src = this.link;
    newCard.querySelector('.mesto-card__photo').alt = this.name;
    newCard.querySelector('.mesto-card__subtitle-name').textContent = this.name;
    newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', this._addLike);
    newCard.querySelector('.mesto-card__trash').addEventListener('click', this._deleteCard);
    newCard.querySelector('.mesto-card__photo').addEventListener('click', this._showPhoto);
    return newCard;
  }
};

export function handleClosePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleClosePopupOpened() {
  const popup = document.querySelector('.popup_opened');
  handleClosePopup(popup);
}

export function handleClickOverlay(e) {
  const element = e.target;
  if (element.classList.contains('popup')) {
    handleClosePopupOpened();
  }

}

export function handleClosePopupEsc(e) {
  if (e.keyCode === 27) {
    handleClosePopupOpened();
  }
}

export function handleOpenPopup(popup) {
  popup.classList.add('popup_opened');
}

export function handleAddMestoSubmit(e) {
  e.preventDefault();
  const newCard = new Card(mestoInput.value, linkInput.value, '#mesto-card');
  element.prepend(newCard.createMestoCard());

  handleClosePopup(popupAdd);
  formElementAddCard.reset();
  disableSubmitButtons(allClasses);
}

initialCards.forEach(function (cardData) {
  const card = new Card(cardData.name, cardData.link, '#mesto-card');
  element.prepend(card.createMestoCard());
});



photoCloseButton.addEventListener('click', () => handleClosePopup(fullPhoto));
popupProfileOverlay.addEventListener('click', handleClickOverlay);

