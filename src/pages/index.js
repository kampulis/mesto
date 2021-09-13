import { FormValidator } from '../scripts/components/FormValidator.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';
import { Api } from '../scripts/components/Api.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Section } from '../scripts/components/Section.js';
import {
  allClasses,
  profileButton,
  profileButtonAdd,
  nameInput,
  jobInput,
} from '../scripts/utils/constants.js';
import { handleProfileSubmit, handleAddMestoSubmit, handleEditAvatar } from '../scripts/utils/handlers.js';
import { createCard } from '../scripts/utils/helpers.js';

import './index.css';

const popupEditAvatarSelector = ".popup.popup_type_update";
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, handleEditAvatar, new FormValidator(allClasses, popupEditAvatarSelector));

export const userInfo = new UserInfo({
  nameSelector: allClasses.nameSelector,
  aboutSelector: allClasses.aboutSelector,
  fotoSelector: allClasses.fotoContainer,
  handleClick: popupEditAvatar.open,
  fotoInputSelector: '.popup__name.popup__name_type_update',
});

export const popupWithImage = new PopupWithImage('.popup.popup_type_image');
export const popupSubmit = new PopupWithSubmit('.popup.popup_type_confirm');

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

const popupWithUserFormSelector = '.popup.popup_type_edit';
const popupWithUserForm = new PopupWithForm(popupWithUserFormSelector, handleProfileSubmit, new FormValidator(allClasses, popupWithUserFormSelector));

const popupWithAddMestoFormSelector = '.popup.popup_type_new-card'
const popupWithAddMestoForm = new PopupWithForm(popupWithAddMestoFormSelector, handleAddMestoSubmit, new FormValidator(allClasses, popupWithAddMestoFormSelector));

popupWithImage.setEventListeners();
popupWithUserForm.setEventListeners();
popupWithAddMestoForm.setEventListeners();
popupSubmit.setEventListeners();
popupEditAvatar.setEventListeners();

userInfo.fotoContainer.addEventListener('click', (e) => {
  userInfo.updateUserInfoOnPage();
  userInfo.handleClick(e);
});

function setInputValues(userInfo, nameInput, jobInput) {
  const { name, about } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;
}

profileButton.addEventListener('click', () => {
  setInputValues(userInfo, nameInput, jobInput);
  popupWithUserForm.open();
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
