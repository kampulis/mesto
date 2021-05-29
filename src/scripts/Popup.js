import { UserInfo } from '../scripts/UserInfo.js';

const NUMBER_ELEMENT = 27;
export class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  _handleEscClose(e) {
    if (e.keyCode === NUMBER_ELEMENT) {
      this.close();
    }
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this.popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleClosePopupEsc);
    this.popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    const closeIcon = this.popup.querySelector('.popup__close-icon');
    closeIcon.addEventListener('click', this.close);
    this.popup.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('popup')) {
        this.close();
      }
    });
  }
}

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(e) {
    super.open();
    const card = document.querySelector('.popup__card');
    card.src = e.target.src;
    card.alt = e.target.alt;
    const parent = e.target.closest('.mesto-card');
    const subtitle = parent.querySelector('.mesto-card__subtitle-name');
    document.querySelector('.popup__text').textContent = subtitle.textContent;
  }
}

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.form = this.popup.querySelector('form');
    this.setEventListeners = this.setEventListeners.bind(this);
    this.close = this.close.bind(this);
  }

  _getInputValues() {
    const nameInput = this.form.querySelector('#name');
    const jobInput = this.form.querySelector('#job');
    const mestoInput = this.form.querySelector('#mesto');
    const linkInput = this.form.querySelector('#link');

    return {
      name: nameInput && nameInput.value,
      about: jobInput && jobInput.value,
      mesto: mestoInput && mestoInput.value,
      link: linkInput && linkInput.value,
    }
  }

  _setInputValues() {
    const userInfo = new UserInfo({
      nameSelector: '.profile__info-title',
      aboutSelector: '.profile__info-subtitle',
    });

    const { name, about } = userInfo.getUserInfo();
    const nameInput = this.form.querySelector('#name');
    const jobInput = this.form.querySelector('#job');

    if (nameInput && jobInput) {
      nameInput.value = name;
      jobInput.value = about;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      this.submitFormHandler(e, this._getInputValues());
      this.close();
    })
  }

  open() {
    super.open();
    this._setInputValues();
  }

  close() {
    super.close();
    this.form.reset();
  }
}
