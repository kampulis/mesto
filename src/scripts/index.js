import { FormValidator } from '../scripts/FormValidator.js';
import { Card } from '../scripts/Cards.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { Section } from '../scripts/Section.js';
import {
  PopupWithImage,
  PopupWithForm,
} from '../scripts/Popup.js';
import { disableSubmitButtons } from '../scripts/FormValidator.js';
import { initialCards } from '../scripts/initialCards.js';

import '../pages/index.css';

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
const profileButtonAdd = document.querySelector(".profile__button-add");
const forms = Array.from(document.querySelectorAll(allClasses.formSelector));
const popupWithImage = new PopupWithImage('.popup.popup_type_image');
const popupWithUserForm = new PopupWithForm('.popup.popup_type_edit', handleProfileSubmit);
const popupWithAddMestoForm = new PopupWithForm('.popup.popup_type_new-card', handleAddMestoSubmit);

const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  aboutSelector: '.profile__info-subtitle',
});

const section = new Section({
  items: initialCards,
  renderer: function (cardData) {
    const card = new Card(
      cardData.name,
      cardData.link,
      '#mesto-card',
      popupWithImage.open,
    );
    return card.createMestoCard();
  },
}, '.elements');

function handleProfileSubmit(evt, values) {
  evt.preventDefault();

  const { name, about } = values;
  userInfo.setUserInfo({ name, about });
}

function handleAddMestoSubmit(e, values) {
  e.preventDefault();

  const { mesto, link } = values;
  const newCard = new Card(
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
profileButton.addEventListener('click', popupWithUserForm.open);
profileButtonAdd.addEventListener('click', popupWithAddMestoForm.open);
