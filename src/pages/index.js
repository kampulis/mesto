import { FormValidator } from '../scripts/FormValidator.js';
import {
  allClasses,
  forms,
  popupWithImage,
  popupWithUserForm,
  popupWithAddMestoForm,
  userInfo,
  profileButton,
  profileButtonAdd,
  section,
  api,
  nameContainer,
  aboutContainer,
  fotoContainer
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

section.initCards();

popupWithImage.setEventListeners();
popupWithUserForm.setEventListeners();
popupWithAddMestoForm.setEventListeners();

profileButton.addEventListener('click', () => {
  popupWithUserForm.open();
  setInputValues(userInfo);
  
});

profileButtonAdd.addEventListener('click', popupWithAddMestoForm.open)

function processData(data) {
  nameContainer.textContent = data.name;
  aboutContainer.textContent = data.about;
  console.log('>>', fotoContainer);
  fotoContainer.src = data.avatar;
}

api.getInfoAboutPeople(processData);
