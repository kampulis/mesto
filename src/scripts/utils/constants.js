import { UserInfo } from '../UserInfo.js';
import { Section } from '../Section.js';
import { PopupWithImage } from '../PopupWithImage.js';
import { PopupWithForm } from '../PopupWithForm.js';
import { handleProfileSubmit, handleAddMestoSubmit, handleEditAvatar } from './handlers.js';
import { createCard } from './helpers.js';
import { PopupWithSubmit } from '../PopupWithSubmit.js';
import { Api } from '../Api.js';

export const allClasses = {
  formSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputContainerSelector: '.popup__name-container',
  inputSelector: '.popup__name',
  inputErrorSelector: '.popup__name.popup__name_type_err',
  disabledButtonSelector: '.popup__container_new-card .popup__button',
  nameSelector: '.profile__info-title',
};

const profile = document.querySelector('.profile');
export const profileButton = profile.querySelector('.profile__button');
export const profileButtonAdd = document.querySelector(".profile__button-add");
export const trashButton = document.querySelector('.mesto-card__trash');
export const nameContainer = document.querySelector(allClasses.nameSelector);
export const aboutContainer = document.querySelector('.profile__info-subtitle');
export const fotoContainer = document.querySelector('.profile__foto');
export const forms = Array.from(document.querySelectorAll(allClasses.formSelector));

export const userInfo = new UserInfo({
  nameSelector: allClasses.nameSelector,
  aboutSelector: '.profile__info-subtitle',
});

export const popupWithImage = new PopupWithImage('.popup.popup_type_image');
export const popupWithUserForm = new PopupWithForm('.popup.popup_type_edit', handleProfileSubmit, userInfo);
export const popupWithAddMestoForm = new PopupWithForm('.popup.popup_type_new-card', handleAddMestoSubmit, userInfo);
export const popupSubmit = new PopupWithSubmit('.popup.popup_type_confirm');
export const popupAdd = document.querySelector(".popup_type_new-card");
export const popupEditAvatar = new PopupWithForm(".popup.popup_type_update", handleEditAvatar);

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26/',
  headers: {
    authorization: '82256f25-365c-46ac-aa1f-a846129f6d77',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, DELETE',
  }
});

const renderer = ({ name, link, likes, _id }, isOwner) => createCard(name, link, likes, _id, isOwner);


export const section = new Section({
  api,
  renderer,
  userInfo,
}, '.elements');
