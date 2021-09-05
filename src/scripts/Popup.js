const ESCAPE_KEYCODE = 27;
export class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
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
