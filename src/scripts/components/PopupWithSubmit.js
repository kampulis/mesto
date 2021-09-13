import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(selector) {
    super(selector);
    this.form = this.popup.querySelector('form');
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitFormHandler();
    })
  }

  open(onSubmit) {
    super.open();
    this.submitFormHandler = onSubmit;
  }
}
