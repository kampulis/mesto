export class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  _handleEscClose(e) {
    if (e.keyCode === NUMBER_ELEMENT) {
      handleClosePopupOpened();
    }
  }

  open() {
    document.addEventListener('keydown', this._handleClosePopupEsc);
    this.popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleClosePopupEsc);
    this.popup.classList.remove('popup_opened');
  }

  setEventListeners() {

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
  }

  _getInputValues() {

  }

  setEventListeners() {

  }

  close() {

  }
}
