import { disableSubmitButtons } from '../FormValidator.js';
import { createCard } from './helpers.js';
import { userInfo, section, allClasses, api, fotoContainer  } from './constants.js';

export function handleProfileSubmit(evt, values) {
  evt.preventDefault();

  const { name, job } = values;
  userInfo.setUserInfo({ name, job });
  api.updateEditProfile({ name, about: job });
}

const onAddMestoSuccess = ({ name, link, likes, _id, owner }) => {
  const { name: userName } = userInfo.getUserInfo();
  const isOwner = userName === owner.name;
  section.addItem(createCard(name, link, likes, _id, isOwner));
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

const onAddAvatarSuccess = (avatarUrl) => {
  fotoContainer.src = avatarUrl;
};


export function handleEditAvatar(e, values) {
  e.preventDefault();

  const { link } = values;

  api.updateEditAvatar(link, onAddAvatarSuccess);
}
