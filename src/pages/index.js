import { FormValidator } from '../scripts/FormValidator.js';
import { Card } from '../scripts/Cards.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { disableSubmitButtons } from '../scripts/FormValidator.js';
import {
  allClasses,
  initialCards
} from '../scripts/utils/constants.js';

import './index.css';

const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button');
const profileButtonAdd = document.querySelector(".profile__button-add");
const forms = Array.from(document.querySelectorAll(allClasses.formSelector));

const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  aboutSelector: '.profile__info-subtitle',
});

const popupWithImage = new PopupWithImage('.popup.popup_type_image');
const popupWithUserForm = new PopupWithForm('.popup.popup_type_edit', handleProfileSubmit, userInfo);
const popupWithAddMestoForm = new PopupWithForm('.popup.popup_type_new-card', handleAddMestoSubmit, userInfo);

function createCard(name, link, selector, handler) {
  return new Card(name, link, selector, handler);
}

const section = new Section({
  items: initialCards,
  renderer: function (cardData) {
    const card = createCard(
      cardData.name,
      cardData.link,
      '#mesto-card',
      popupWithImage.open,
    );
    return card.createMestoCard();
  },
}, '.elements');


function setInputValues(userInfo) {
  const nameInput = document.querySelector('#name');
  const jobInput = document.querySelector('#job');

  if (nameInput && jobInput) {
    const { name, about } = userInfo.getUserInfo();

    nameInput.value = name;
    jobInput.value = about;
  }
}

function handleProfileSubmit(evt, values) {
  evt.preventDefault();

  const { name, job } = values;
  userInfo.setUserInfo({ name, job });
}

function handleAddMestoSubmit(e, values) {
  e.preventDefault();

  const { mesto, link } = values;
  const newCard = createCard(
    mesto,
    link,
    '#mesto-card',
    popupWithImage.open,
  );
  section.addItem(newCard.createMestoCard());
  disableSubmitButtons(allClasses);
}

forms.forEach(function (form) {
  const formValidator = new FormValidator(allClasses, form);
  formValidator.enableValidations();
});

section.render();

popupWithImage.setEventListeners();
popupWithUserForm.setEventListeners();
popupWithAddMestoForm.setEventListeners();
profileButton.addEventListener('click', () => {
  popupWithUserForm.open();
  setInputValues(userInfo);
});
profileButtonAdd.addEventListener('click', popupWithAddMestoForm.open)
