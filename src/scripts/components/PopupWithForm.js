import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler, validator) {
    super(selector, validator);
    this.submitFormHandler = submitFormHandler;
    this.form = this.popup.querySelector('form');
    this.validator = validator;
  }

  _getInputValues() {
    const values = {};

    this.form.querySelectorAll('input').forEach((input) => {
      values[input.id] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this.validator.enableValidations();
    this.form.addEventListener('submit', (e) => {
      this.updateSubmitButtonText('Сохранение...');
      this.submitFormHandler(e, this._getInputValues(), this);
    })
  }

  open() {
    super.open();
    this.validator.clearErrors();
    this.validator.toggleSubmitButtonState();
  }

  close() {
    super.close();
    this.form.reset();
  }
}
