import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(e) {
    super.open();
    const card = this.popup.querySelector('img');
    card.src = e.target.src;
    card.alt = e.target.alt;
    const parent = e.target.closest('.mesto-card');
    const subtitle = parent.querySelector('.mesto-card__subtitle-name');
    this.popup.querySelector('.popup__text').textContent = subtitle.textContent;
  }
}
