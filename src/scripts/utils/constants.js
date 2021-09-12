export const allClasses = {
  formSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputContainerSelector: '.popup__name-container',
  inputSelector: '.popup__name',
  inputErrorSelector: '.popup__name.popup__name_type_err',
  disabledButtonSelector: '.popup__container_new-card .popup__button',
  nameSelector: '.profile__info-title',
  fotoContainer: '.profile__foto',
  aboutSelector: '.profile__info-subtitle',
};

const profile = document.querySelector('.profile');
export const profileButton = profile.querySelector('.profile__button');
export const profileButtonAdd = document.querySelector(".profile__button-add");
export const trashButton = document.querySelector('.mesto-card__trash');
export const nameContainer = document.querySelector(allClasses.nameSelector);
export const aboutContainer = document.querySelector('.profile__info-subtitle');
export const nameInput = document.querySelector('#name');
export const jobInput = document.querySelector('#job');