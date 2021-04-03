let profile = document.querySelector('.profile');
let profileButton = profile.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let body = document.querySelector('.body');
let closeIcon = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let photo = document.querySelector('.photo');

function showClick() {
  popup.classList.add('popup_opened');
  body.style.overflow = 'hidden';
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

profileButton.addEventListener('click', showClick);

function endClick() {
  popup.classList.remove('popup_opened');
  body.style.overflow = 'visible';

}

closeIcon.addEventListener('click', endClick);

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  endClick();
}

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


/** Создаем карточки из массива */

const element = document.querySelector('.elements');

function createMestoCard(name, link) {
  const template = document.querySelector('#mesto-card').content.cloneNode(true);
  template.querySelector('.mesto-card__photo').src = link;
  template.querySelector('.mesto-card__subtitle-name').textContent = name;
  template.querySelector('.mesto-card__subtitle-icon').addEventListener('click', addLike);
  template.querySelector('.mesto-card__trash').addEventListener('click', deleteCard);
  template.querySelector('.mesto-card__photo').addEventListener('click', showPhoto);
  return template;
};

initialCards.forEach(function (card) {
  element.prepend(createMestoCard(card.name, card.link));
});


/** Попап добавления новой карточки */

let profileButtonAdd = document.querySelector(".profile__button-add");
let popupAdd = document.querySelector(".popup-add");
let popupAddCloseButton = document.querySelector('.popup-add__close-icon');

function showPopupAdd() {
  popupAdd.classList.add('popup-add_opened');
  body.style.overflow = 'hidden';
}

profileButtonAdd.addEventListener('click', showPopupAdd);

function closePopupAdd() {
  popupAdd.classList.remove('popup-add_opened');
  body.style.overflow = 'visible';
}

popupAddCloseButton.addEventListener('click', closePopupAdd);

function formSubmitAddMesto(e) {
  let mestoInput = document.querySelector('#mesto');
  let linkInput = document.querySelector('#link');
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  closePopupAdd();
}

popupAdd.addEventListener('submit', formSubmitAddMesto);


/** Кнопки на карточке */

function addLike(e) {
  if (e.target.classList.contains('mesto-card__subtitle-icon_active')) {
    e.target.classList.remove('mesto-card__subtitle-icon_active');
  } else {
    e.target.classList.add('mesto-card__subtitle-icon_active');
  };
}

function deleteCard(e) {
  const card = e.target.closest('.mesto-card');
  card.remove();
}


/** Работа с фото */

let fullPhoto = document.querySelector('.photo');

function showPhoto(e) {
  fullPhoto.classList.add('photo_opened');
  body.style.overflow = 'hidden';
  document.querySelector('.photo__card').src = e.target.src;
  let rod = e.target.closest('.mesto-card');
  let subtitle = rod.querySelector('.mesto-card__subtitle-name');
  document.querySelector('.photo__text').textContent = subtitle.innerText;
}

function closePhoto() {
  fullPhoto.classList.remove('photo_opened');
  body.style.overflow = 'visible';
}

let photoCloseButton = document.querySelector(".photo__icon-close");
photoCloseButton.addEventListener('click', closePhoto);
