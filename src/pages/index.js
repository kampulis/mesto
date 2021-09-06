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
  fotoContainer,
  popupSubmit
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

popupWithImage.setEventListeners();
popupWithUserForm.setEventListeners();
popupWithAddMestoForm.setEventListeners();
popupSubmit.setEventListeners();

profileButton.addEventListener('click', () => {
  popupWithUserForm.open();
  setInputValues(userInfo);

});

profileButtonAdd.addEventListener('click', popupWithAddMestoForm.open)

api.getInfoAboutPeople((data) => {
  nameContainer.textContent = data.name;
  aboutContainer.textContent = data.about;
  fotoContainer.src = data.avatar;

  section.initCards();
});
