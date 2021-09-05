import { disableSubmitButtons } from '../FormValidator.js';
import { createCard } from './helpers.js';
import { userInfo, section, allClasses, api } from './constants.js';

export function handleProfileSubmit(evt, values) {
  evt.preventDefault();

  const { name, job } = values;
  userInfo.setUserInfo({ name, job });
  api.updateEditProfile({ name, about: job });
}

const onAddMestoSuccess = ({ name, link, likes, _id }) => {

  section.addItem(createCard(name, link, likes, _id));
  disableSubmitButtons(allClasses);
}

export function handleAddMestoSubmit(e, values) {
  e.preventDefault();
  const { mesto, link } = values;

  api.addNewСard(
    { name: mesto, link },
    onAddMestoSuccess,
  );
}
