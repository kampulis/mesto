import { FormValidator, resetFormsErrors } from '../scripts/FormValidator.js';
import initialCards from '../scripts/initial-сards.js';

const allClasses = {
  formSelector: '.popup__input',
  inputErrorSelector: '.popup__name_type_err',
  submitButtonSelector: '.popup__button',
  inputContainerSelector: '.popup__name-container',
  inputSelector: '.popup__name',
  inputErrorSelector: '.popup__name.popup__name_type_err',
  disabledButtonSelector: '.popup__container_new-card .popup__button',
};

const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.popup__container_type_edit .popup__input');
const formElementAddCard = document.querySelector('.popup_type_new-card .popup__input');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const profileButtonAdd = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddCloseButton = document.querySelector('.popup_type_new-card .popup__close-icon');
const mestoInput = document.querySelector('#mesto');
const linkInput = document.querySelector('#link');
const photoCloseButton = document.querySelector(".popup_type_image .popup__close-icon");
const fullPhoto = document.querySelector('.popup_type_image');
const element = document.querySelector('.elements');
const template = document.querySelector('#mesto-card');
const popupProfileOverlay = document.querySelector('.popup.popup_type_edit');
const popupAddMestoOverlay = document.querySelector('.popup.popup_type_new-card');
const showImageOverlay = document.querySelector('.popup.popup_type_image');
const forms = Array.from(document.querySelectorAll(allClasses.formSelector));


function handleOpenPopup(popup) {
  popup.classList.add('popup_opened');
}

function handleClosePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleClosePopupOpened() {
  const popup = document.querySelector('.popup_opened');
  handleClosePopup(popup);
}

function handleClickOverlay(e) {
  const element = e.target;
  if (element.classList.contains('popup')) {
    handleClosePopupOpened();
  }

}

function handleClosePopupEsc(e) {
  if (e.keyCode === 27) {
    handleClosePopupOpened();
  }
}

function handleShowProfile() {
  resetFormsErrors(forms, allClasses);
  handleOpenPopup(popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handleProfileSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  handleClosePopup(popup);
}

function handleShowAddMesto() {
  resetFormsErrors(forms, allClasses);
  handleOpenPopup(popupAdd);
}

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

forms.forEach(function (form) {
  const formValidator = new FormValidator(allClasses, form);
  formValidator.enableValidations();
});

/** Попап добавления новой карточки */

function handleAddMestoSubmit(e) {
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  handleClosePopup(popupAdd);
  formElementAddCard.reset();
  disableSubmitButtons(allClasses);
}

/** Кнопки на карточке */

function addLike(e) {
  e.target.classList.toggle('mesto-card__subtitle-icon_active');
}

function deleteCard(e) {
  const card = e.target.closest('.mesto-card');
  card.remove();
}

/** Работа с фото */

function showPhoto(e) {
  handleOpenPopup(fullPhoto);
  document.querySelector('.popup__card').src = e.target.src;
  document.querySelector('.popup__card').alt = e.target.alt;
  const rod = e.target.closest('.mesto-card');
  const subtitle = rod.querySelector('.mesto-card__subtitle-name');
  document.querySelector('.popup__text').textContent = subtitle.textContent;
}

photoCloseButton.addEventListener('click', () => handleClosePopup(fullPhoto));
profileButton.addEventListener('click', handleShowProfile);
closeIcon.addEventListener('click', () => handleClosePopup(popup));
formElement.addEventListener('submit', handleProfileSubmit);
profileButtonAdd.addEventListener('click', handleShowAddMesto);
popupAddCloseButton.addEventListener('click', () => handleClosePopup(popupAdd));
popupAdd.addEventListener('submit', handleAddMestoSubmit);
popupProfileOverlay.addEventListener('click', handleClickOverlay);
popupAddMestoOverlay.addEventListener('click', handleClickOverlay);
showImageOverlay.addEventListener('click', handleClickOverlay);
document.addEventListener('keydown', handleClosePopupEsc);
