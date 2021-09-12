const ESCAPE_KEYCODE = 27;

export class Popup {
  constructor(selector, validator) {
    this.popup = document.querySelector(selector);
    this.validator = validator;
    this.submitButton = this.popup.querySelector('button[type="submit"]');

    if (this.submitButton) {
      this.defaultSubmitButtonText = this.submitButton.textContent;
    }

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

    if (this.validator) {
      this.validator.clearErrors();
      this.validator.toggleSubmitButtonState();
    }
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
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

    if (this.validator) {
      this.validator.enableValidations();
    }
  }

  updateSubmitButtonText(text) {
    if (this.submitButton) {
      this.submitButton.textContent = text;
    }
  }

  resetSubmitButtonText() {
    this.updateSubmitButtonText(this.defaultSubmitButtonText)
  }
}
