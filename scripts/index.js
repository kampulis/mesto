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
const element = document.querySelector('.elements');
const template = document.querySelector('#mesto-card');


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


function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popup);
}

function createMestoCard(name, link) {
  const newCard = template.content.cloneNode(true);
  newCard.querySelector('.mesto-card__photo').src = link;
  newCard.querySelector('.mesto-card__photo').alt = name;
  newCard.querySelector('.mesto-card__subtitle-name').textContent = name;
  newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', addLike);
  newCard.querySelector('.mesto-card__trash').addEventListener('click', deleteCard);
  newCard.querySelector('.mesto-card__photo').addEventListener('click', showPhoto);
  return newCard;
};

initialCards.forEach(function (card) {
  element.prepend(createMestoCard(card.name, card.link));
});

/** Попап добавления новой карточки */

function formSubmitAddMesto(e) {
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  closePopup(popupAdd);
  formElementAddCard.reset();
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
  const rod = e.target.closest('.mesto-card');
  const subtitle = rod.querySelector('.mesto-card__subtitle-name');
  document.querySelector('.popup__text').textContent = subtitle.textContent;
}

photoCloseButton.addEventListener('click', () => closePopup(fullPhoto));
profileButton.addEventListener('click', showClick);
closeIcon.addEventListener('click', () => closePopup(popup));
formElement.addEventListener('submit', formSubmitHandler);
profileButtonAdd.addEventListener('click', () => openPopup(popupAdd));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupAdd.addEventListener('submit', formSubmitAddMesto);




