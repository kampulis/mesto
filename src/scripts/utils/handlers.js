import { disableSubmitButtons } from '../components/FormValidator.js';
import { createCard } from './helpers.js';
import { allClasses } from './constants.js';
import { userInfo, section, api } from '../../pages/index';

export function handleProfileSubmit(evt, values, onSuccess) {
  evt.preventDefault();

  api.updateEditProfile({ name: values.name, about: values.job }).then(({ name, about: job }) => {
    onSuccess();
    userInfo.updateNameAndJob({ name, job });
  }).catch((err) => {
    console.error('Не удалось обновить профиль', err);
  });
}

export function handleAddMestoSubmit(e, values, onSuccess) {
  e.preventDefault();
  const { mesto, link } = values;

  api.addNewСard({ name: mesto, link }).then(({ name, owner, likes, _id }) => {
    onSuccess();
    const currentUser = userInfo.getUserInfo();
    section.addItem(createCard(name, link, likes, _id, owner, currentUser));
    disableSubmitButtons(allClasses);
  }).catch((err) => {
    console.error('Не удалось добавить новую карточку', err);
  });
}

export function handleEditAvatar(e, values, onSuccess) {
  e.preventDefault();

  api.updateEditAvatar(values['link-avatar']).then(({ avatar }) => {
    onSuccess();
    userInfo.updateAvatarUrl(avatar);
  }).catch((err) => {
    console.error('Не удалось обновить аватар', err);
  });
}
