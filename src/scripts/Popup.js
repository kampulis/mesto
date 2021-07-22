const ESCAPE_KEYCODE = 27;
export class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  _handleEscClose(e) {
    if (e.keyCode === ESCAPE_KEYCODE) {
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
    const card = this.popup;
    card.src = e.target.src;
    card.alt = e.target.alt;
    const parent = e.target.closest('.mesto-card');
    const subtitle = parent.querySelector('.mesto-card__subtitle-name');
    document.querySelector('.popup__text').textContent = subtitle.textContent;
  }
}

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler, userInfo) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.userInfo = userInfo;
    this.form = this.popup.querySelector('form');
  }

  _getInputValues() {

    const values = {};

    this.form.querySelectorAll('input').forEach((input) => {
      values[input.id] = input.value;
    });
    return values;
  }

  _setInputValues() {

    const nameInput = this.form.querySelector('#name');
    const jobInput = this.form.querySelector('#job');

    if (nameInput && jobInput) {
      const { name, about } = this.userInfo.getUserInfo();

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
