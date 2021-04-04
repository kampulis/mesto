const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const body = document.querySelector('.body');
const closeIcon = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.popup__container_type_edit .popup__input');
const formElementAddCard = document.querySelector('.popup_type_new-card .popup__input');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const photo = document.querySelector('.photo');
const profileButtonAdd = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddCloseButton = document.querySelector('.popup_type_new-card .popup__close-icon');
const mestoInput = document.querySelector('#mesto');
const linkInput = document.querySelector('#link');
const photoCloseButton = document.querySelector(".popup_type_image .popup__close-icon");
const fullPhoto = document.querySelector('.popup_type_image');

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


/** Попап добавления новой карточки */

function showPopupAdd() {
  popupAdd.classList.add('popup_opened');
  body.style.overflow = 'hidden';
}

profileButtonAdd.addEventListener('click', showPopupAdd);

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
  body.style.overflow = 'visible';
  formElementAddCard.reset();
}

popupAddCloseButton.addEventListener('click', closePopupAdd);

function formSubmitAddMesto(e) {
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  closePopupAdd();
}

popupAdd.addEventListener('submit', formSubmitAddMesto);


/** Кнопки на карточке */

function addLike(e) {
  e.target.classList.toggle('mesto-card__subtitle-icon_active');
}

function deleteCard(e) {
  const card = e.target.closest('.mesto-card');
  card.remove();
}


/** Работа с фото */



function showPhoto(e) {
  fullPhoto.classList.add('popup_opened');
  body.style.overflow = 'hidden';
  document.querySelector('.popup__card').src = e.target.src;
  let rod = e.target.closest('.mesto-card');
  let subtitle = rod.querySelector('.mesto-card__subtitle-name');
  document.querySelector('.popup__text').textContent = subtitle.innerText;
}

function closePhoto() {
  fullPhoto.classList.remove('popup_opened');
  body.style.overflow = 'visible';
}


photoCloseButton.addEventListener('click', closePhoto);
