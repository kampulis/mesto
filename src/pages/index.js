import { FormValidator } from '../scripts/FormValidator.js';
import { createCard } from '../scripts/utils/helpers.js';
import {
  allClasses,
  initialCards,
  forms,
  popupWithImage,
  popupWithUserForm,
  popupWithAddMestoForm,
  userInfo,
  profileButton,
  profileButtonAdd,
  section,
} from '../scripts/utils/constants.js';

import './index.css';

function setInputValues(userInfo) {
  const nameInput = document.querySelector('#name');
  const jobInput = document.querySelector('#job');
  const { name, about } = userInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;
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
