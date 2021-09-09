import { disableSubmitButtons } from '../FormValidator.js';
import { createCard } from './helpers.js';
import { userInfo, section, allClasses, api, fotoContainer } from './constants.js';

export function handleProfileSubmit(evt, values, onSuccess) {
  evt.preventDefault();

  const { name, job } = values;
  userInfo.setUserInfo({ name, job });
  api.updateEditProfile({ name, about: job }, onSuccess);
}

export function handleAddMestoSubmit(e, values, onSuccess) {
  e.preventDefault();
  const { mesto, link } = values;

  api.addNewСard(
    { name: mesto, link },
    ({ name, owner, likes, _id }) => {
      onSuccess();
      const { name: userName } = userInfo.getUserInfo();
      const isOwner = userName === owner.name;
      section.addItem(createCard(name, link, likes, _id, isOwner));
      disableSubmitButtons(allClasses);
    }
  );
}

export function handleEditAvatar(e, values, onSuccess) {
  e.preventDefault();

  const { link } = values;

  api.updateEditAvatar(link, (avatarUrl) => {
    onSuccess();
    fotoContainer.src = avatarUrl;
  });
}
