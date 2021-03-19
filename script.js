
let container = document.querySelector('.profile');
let profileBottom = container.querySelector('.profile__bottom');
console.log(profileBottom);
let popup = document.querySelector('.popup');
console.log(popup);
let body = document.querySelector('body');
let closeIcon = document.querySelector('.popup__close-icon');

function showClick() {
  popup.style.display = 'flex';
  body.style.overflow = 'hidden';
}

profileBottom.addEventListener('click', showClick);

function endClick() {
  popup.style.display = 'none';
  body.style.overflow = 'visible';
}

closeIcon.addEventListener('click', endClick);




let formElement = document.querySelector('.popup__input');

let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');


formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  let profileTitle = document.querySelector('.profile__info-title');
  let profileSubtitle = document.querySelector('.profile__info-subtitle');

  profileTitle.textContent = nameInputValue;
  profileSubtitle.textContent = jobInputValue;

  endClick();
}


formElement.addEventListener('submit', formSubmitHandler); 