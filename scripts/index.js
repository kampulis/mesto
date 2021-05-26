import { FormValidator, resetFormsErrors } from '../scripts/FormValidator.js';
import {
  Card,
  popupAdd,
} from '../scripts/Cards.js';
import {
  PopupWithImage,
  PopupWithForm,
} from '../scripts/Popup.js';
import { disableSubmitButtons } from '../scripts/FormValidator.js';
import { initialCards } from '../scripts/initialCards.js';

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
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const popupAddMestoOverlay = document.querySelector('.popup.popup_type_new-card');
const showImageOverlay = document.querySelector('.popup.popup_type_image');
const forms = Array.from(document.querySelectorAll(allClasses.formSelector));
const popupAddCloseButton = document.querySelector('.popup_type_new-card .popup__close-icon');
const profileButtonAdd = document.querySelector(".profile__button-add");
const formElementAddCard = document.querySelector('.popup_type_new-card .popup__input');
const mestoInput = document.querySelector('#mesto');
const linkInput = document.querySelector('#link');
const photoCloseButton = document.querySelector(".popup_type_image .popup__close-icon");
const element = document.querySelector('.elements');
const popupProfileOverlay = document.querySelector('.popup.popup_type_edit');
const NUMBER_ELEMENT = 27;

const popupWithImage = new PopupWithImage('.popup.popup_type_image');

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

function handleClosePopup(popup) {
  document.removeEventListener('keydown', handleClosePopupEsc);
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
  if (e.keyCode === NUMBER_ELEMENT) {
    handleClosePopupOpened();
  }
}

function handleOpenPopup(popup) {
  document.addEventListener('keydown', handleClosePopupEsc);
  popup.classList.add('popup_opened');
}

function handleAddMestoSubmit(e) {
  e.preventDefault();
  const newCard = new Card(
    mestoInput.value,
    linkInput.value,
    '#mesto-card',
    popupWithImage.open,
  );
  element.prepend(newCard.createMestoCard());

  handleClosePopup(popupAdd);
  formElementAddCard.reset();
  disableSubmitButtons(allClasses);
}

forms.forEach(function (form) {
  const formValidator = new FormValidator(allClasses, form);
  formValidator.enableValidations();
});

initialCards.forEach(function (cardData) {
  const card = new Card(
    cardData.name,
    cardData.link,
    '#mesto-card',
    popupWithImage.open,
  );
  element.prepend(card.createMestoCard());
});


profileButton.addEventListener('click', handleShowProfile);
closeIcon.addEventListener('click', () => handleClosePopup(popup));
formElement.addEventListener('submit', handleProfileSubmit);
popupAddMestoOverlay.addEventListener('click', handleClickOverlay);
showImageOverlay.addEventListener('click', handleClickOverlay);
popupAddCloseButton.addEventListener('click', () => handleClosePopup(popupAdd));
profileButtonAdd.addEventListener('click', handleShowAddMesto);
popupAdd.addEventListener('submit', handleAddMestoSubmit);
photoCloseButton.addEventListener('click', popupWithImage.close);
popupProfileOverlay.addEventListener('click', handleClickOverlay);


