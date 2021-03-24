
let container = document.querySelector('.profile');
let profileButton = container.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let body = document.querySelector('.body');
let closeIcon = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');

function showClick() {
  popup.classList.add('popup_opened');
  body.style.overflow = 'hidden';
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

profileButton.addEventListener('click', showClick);

function endClick() {
  popup.classList.remove('popup_opened');
}

closeIcon.addEventListener('click', endClick);


function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  endClick();
}

formElement.addEventListener('submit', formSubmitHandler); 