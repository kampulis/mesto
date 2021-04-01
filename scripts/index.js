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

const element = document.querySelector('.elements');

function createMestoCard(name, link) {
  const template = document.querySelector('#mesto-card').content.cloneNode(true);
  template.querySelector('.mesto-card__photo').src = link;
  template.querySelector('.mesto-card__subtitle-name').textContent = name;
  template.querySelector('.mesto-card__subtitle-icon').addEventListener('click', likeAdd);
  return template;
};


initialCards.forEach(function (card) {
  element.prepend(createMestoCard(card.name, card.link));
});

let profileAdd = document.querySelector(".profile__button-add");
let popupAdd = document.querySelector(".popup-add");
let closeIconAdd = document.querySelector('.popup-add__close-icon');

function showClickAdd() {
  popupAdd.classList.add('popup-add_opened');
  body.style.overflow = 'hidden';

}

profileAdd.addEventListener('click', showClickAdd);

function endClickAdd() {
  popupAdd.classList.remove('popup-add_opened');
  body.style.overflow = 'visible';

}

closeIconAdd.addEventListener('click', endClickAdd);



let buttonMesto = document.querySelector
let mestoInput = document.querySelector('#mesto');
let linkInput = document.querySelector('#link');

function formSubmitAddMesto(e) {
  e.preventDefault();

  element.prepend(
    createMestoCard(mestoInput.value, linkInput.value)
  );

  endClickAdd();
}

popupAdd.addEventListener('submit', formSubmitAddMesto);


function likeAdd(e) {
  e.target.classList.add('mesto-card__subtitle-icon_active');
  console.log(e.target);
}


//let likeR = document.querySelectorAll('.mesto-card__subtitle-icon_active');

//function likeRemove() {
 // like.classList.remove('mesto-card__subtitle-icon_active');
//}

//likeR.addEventListener('click', likeRemove);
