import { disableSubmitButtons } from '../components/FormValidator.js';
import { createCard } from './helpers.js';
import { allClasses, fotoContainer } from './constants.js';
import { userInfo, section, api } from '../../pages/index';

export function handleProfileSubmit(evt, values, onSuccess) {
  evt.preventDefault();

  const { name, job } = values;

  api.updateEditProfile({ name, about: job }, () => {
    onSuccess();
    userInfo.setUserInfo({ name, job });
  }).catch((err) => {
    console.error('Не удалось обновить профиль', err);
  });
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
  ).catch((err) => {
    console.error('Не удалось добавить новую карточку', err);
  });
}

export function handleEditAvatar(e, values, onSuccess) {
  e.preventDefault();

  api.updateEditAvatar(values['link-avatar'], (avatarUrl) => {
    onSuccess();
    fotoContainer.src = avatarUrl;
  }).catch((err) => {
    console.error('Не удалось обновить аватар', err);
  });
}
