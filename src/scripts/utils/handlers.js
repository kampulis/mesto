import { createCard } from './helpers.js';
import { userInfo, section, api } from '../../pages/index';

export function handleProfileSubmit(evt, values, popup) {
  evt.preventDefault();

  api.updateEditProfile({ name: values.name, about: values.job }).then(({ name, about: job }) => {
    popup.close();
    popup.resetSubmitButtonText();
    userInfo.updateNameAndJob({ name, job });
  }).catch((err) => {
    console.error('Не удалось обновить профиль', err);
  });
}

export function handleAddMestoSubmit(e, values, popup) {
  e.preventDefault();
  const { mesto, link } = values;

  api.addNewСard({ name: mesto, link }).then(({ name, owner, likes, _id }) => {
    popup.close();
    popup.resetSubmitButtonText();
    const currentUser = userInfo.getUserInfo();
    section.addItem(createCard(name, link, likes, _id, owner, currentUser));
  }).catch((err) => {
    console.error('Не удалось добавить новую карточку', err);
  });
}

export function handleEditAvatar(e, values, popup) {
  e.preventDefault();

  api.updateEditAvatar(values['link-avatar']).then(({ avatar }) => {
    popup.close();
    popup.resetSubmitButtonText();
    userInfo.updateAvatarUrl(avatar);
  }).catch((err) => {
    console.error('Не удалось обновить аватар', err);
  });
}
