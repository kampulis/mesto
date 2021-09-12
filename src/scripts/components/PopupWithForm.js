import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.form = this.popup.querySelector('form');
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
    this.form.addEventListener('submit', (e) => {
      this.updateSubmitButtonText('Сохранение...');
      this.submitFormHandler(e, this._getInputValues(), () => {
        this.close();
        this.resetSubmitButtonText();
      });
    })
  }

  close() {
    super.close();
    this.form.reset();
  }
}
