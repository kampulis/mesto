import { FormValidator } from '../scripts/components/FormValidator.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';
import { Api } from '../scripts/components/Api.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Section } from '../scripts/components/Section.js';
import {
  allClasses,
  forms,
  profileButton,
  profileButtonAdd,
  nameInput,
  jobInput,
} from '../scripts/utils/constants.js';
import { handleProfileSubmit, handleAddMestoSubmit, handleEditAvatar } from '../scripts/utils/handlers.js';
import { createCard } from '../scripts/utils/helpers.js';

import './index.css';

const popupEditAvatar = new PopupWithForm(".popup.popup_type_update", handleEditAvatar);

export const userInfo = new UserInfo({
  nameSelector: allClasses.nameSelector,
  aboutSelector: allClasses.aboutSelector,
  fotoSelector: allClasses.fotoContainer,
  handleClick: popupEditAvatar.open,
});

export const popupWithImage = new PopupWithImage('.popup.popup_type_image');

export const popupSubmit = new PopupWithSubmit('.popup.popup_type_confirm');
// const popupAdd = document.querySelector(".popup_type_new-card");

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26/',
  headers: {
    authorization: '82256f25-365c-46ac-aa1f-a846129f6d77',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, DELETE',
  }
});

const renderer = ({ name, link, likes, owner, _id }, currentUser) => createCard(name, link, likes, _id, owner, currentUser);
export const section = new Section({ api, renderer, userInfo }, '.elements');

const popupWithUserForm = new PopupWithForm('.popup.popup_type_edit', handleProfileSubmit, userInfo);
const popupWithAddMestoForm = new PopupWithForm('.popup.popup_type_new-card', handleAddMestoSubmit, userInfo);

forms.forEach(function (form) {
  const formValidator = new FormValidator(allClasses, form);
  formValidator.enableValidations();
});

popupWithImage.setEventListeners();
popupWithUserForm.setEventListeners();
popupWithAddMestoForm.setEventListeners();
popupSubmit.setEventListeners();
popupEditAvatar.setEventListeners();
userInfo.setEventListeners();

function setInputValues(userInfo, nameInput, jobInput) {
  const { name, about } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;
}

profileButton.addEventListener('click', () => {
  popupWithUserForm.open();
  setInputValues(userInfo, nameInput, jobInput);
});

profileButtonAdd.addEventListener('click', popupWithAddMestoForm.open)

api.getInfoAboutPeople().then((info) => {
  userInfo.setUserInfo(info);

  section.initCards().catch((err) => {
    console.error('Не удалось загрузить карточки', err);
  });
}).catch(err => {
  console.error('Не удалось получить информацию о пользователе', err);
});
