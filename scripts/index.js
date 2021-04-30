import { FormValidator, resetFormsErrors } from '../scripts/FormValidator.js';
import {
  Card,
  handleOpenPopup,
  handleClickOverlay,
  handleClosePopupEsc,
  handleClosePopup,
  popupAdd,
  handleAddMestoSubmit,
} from '../scripts/Cards.js';

export const allClasses = {
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

forms.forEach(function (form) {
  const formValidator = new FormValidator(allClasses, form);
  formValidator.enableValidations();
});

profileButton.addEventListener('click', handleShowProfile);
closeIcon.addEventListener('click', () => handleClosePopup(popup));
formElement.addEventListener('submit', handleProfileSubmit);
popupAddMestoOverlay.addEventListener('click', handleClickOverlay);
showImageOverlay.addEventListener('click', handleClickOverlay);
document.addEventListener('keydown', handleClosePopupEsc);
popupAddCloseButton.addEventListener('click', () => handleClosePopup(popupAdd));
profileButtonAdd.addEventListener('click', handleShowAddMesto);
popupAdd.addEventListener('submit', handleAddMestoSubmit);