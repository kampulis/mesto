import { UserInfo } from '../UserInfo.js';
import { Section } from '../Section.js';
import { PopupWithImage } from '../PopupWithImage.js';
import { PopupWithForm } from '../PopupWithForm.js';
import { handleProfileSubmit, handleAddMestoSubmit } from './handlers.js';
import { createCard } from './helpers.js';
import { PopupWithSubmit } from '../PopupWithSubmit.js';

export const allClasses = {
  formSelector: '.popup__input',
  inputErrorSelector: '.popup__name_type_err',
  submitButtonSelector: '.popup__button',
  inputContainerSelector: '.popup__name-container',
  inputSelector: '.popup__name',
  inputErrorSelector: '.popup__name.popup__name_type_err',
  disabledButtonSelector: '.popup__container_new-card .popup__button',
};

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

const profile = document.querySelector('.profile');
export const profileButton = profile.querySelector('.profile__button');
export const profileButtonAdd = document.querySelector(".profile__button-add");
export const forms = Array.from(document.querySelectorAll(allClasses.formSelector));

export const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  aboutSelector: '.profile__info-subtitle',
});

export const section = new Section({
  items: initialCards,
  renderer: ({ name, link }) => createCard(name, link),
}, '.elements');

export const popupWithImage = new PopupWithImage('.popup.popup_type_image');
export const popupWithUserForm = new PopupWithForm('.popup.popup_type_edit', handleProfileSubmit, userInfo);
export const popupWithAddMestoForm = new PopupWithForm('.popup.popup_type_new-card', handleAddMestoSubmit, userInfo);
export const popupSubmit = new PopupWithSubmit('.popup.popup_type_confirm', () => { });

export const popupAdd = document.querySelector(".popup_type_new-card");
