import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.form = this.popup.querySelector('form');
  }

  setEventListeners() {
    this.form.addEventListener('submit', this.setEventListeners)
  }
}