import { Popup } from "./Popup.js";
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
