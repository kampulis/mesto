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


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function showClick() {
  openPopup(popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function endClick() {
  closePopup(popup);
}


function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  endClick();
}

/** Попап добавления новой карточки */

function showPopupAdd() {
  openPopup(popupAdd);
}

function closePopupAdd() {
  closePopup(popupAdd);
  formElementAddCard.reset();
}

function formSubmitAddMesto(e) {
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  closePopupAdd();
}

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
  openPopup(fullPhoto);
  document.querySelector('.popup__card').src = e.target.src;
  document.querySelector('.popup__card').alt = e.target.alt;
  let rod = e.target.closest('.mesto-card');
  let subtitle = rod.querySelector('.mesto-card__subtitle-name');
  document.querySelector('.popup__text').textContent = subtitle.textContent;
}

function closePhoto() {
  closePopup(fullPhoto);
}

photoCloseButton.addEventListener('click', closePhoto);
profileButton.addEventListener('click', showClick);
closeIcon.addEventListener('click', endClick);
formElement.addEventListener('submit', formSubmitHandler);
profileButtonAdd.addEventListener('click', showPopupAdd);
popupAddCloseButton.addEventListener('click', closePopupAdd);
popupAdd.addEventListener('submit', formSubmitAddMesto);