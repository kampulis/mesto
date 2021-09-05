import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.form = this.popup.querySelector('form');
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitFormHandler();
      this.close();
    })
  }

  open(onSubmit) {
    super.open();
    this.submitFormHandler = onSubmit;
  }
}
