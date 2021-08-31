import { disableSubmitButtons } from '../FormValidator.js';
import { createCard } from './helpers.js';
import { userInfo, section, allClasses, api } from './constants.js';

export function handleProfileSubmit(evt, values) {
  evt.preventDefault();

  const { name, job } = values;
  userInfo.setUserInfo({ name, job });
  api.updateEditProfile({ name, about: job });
}

export function handleAddMestoSubmit(e, values) {
  e.preventDefault();

  const { mesto, link } = values;

  section.addItem(createCard(mesto, link));
  disableSubmitButtons(allClasses);
}
