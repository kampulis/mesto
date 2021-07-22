import { Popup } from "./Popup.js";

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