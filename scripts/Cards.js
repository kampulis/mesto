
export const popupAdd = document.querySelector(".popup_type_new-card");
const fullPhoto = document.querySelector('.popup_type_image');


export class Card {
  constructor(name, link, templateSelector) {
    this.name = name;
    this.link = link;
    this.template = document.querySelector(templateSelector);
  }

  /** Попап добавления новой карточки */

  _addLike(e) {
    e.target.classList.toggle('mesto-card__subtitle-icon_active');
  }

  _deleteCard(e) {
    const card = e.target.closest('.mesto-card');
    card.remove();
  }

  _showPhoto(e) {
    const c = document.querySelector('.popup__card');
    handleOpenPopup(fullPhoto);
    c.src = e.target.src;
    c.alt = e.target.alt;
    const rod = e.target.closest('.mesto-card');
    const subtitle = rod.querySelector('.mesto-card__subtitle-name');
    document.querySelector('.popup__text').textContent = subtitle.textContent;
  }

  _getTemplate(newCard) {
    const m = newCard.querySelector('.mesto-card__photo');
    m.src = this.link;
    m.alt = this.name;
    newCard.querySelector('.mesto-card__subtitle-name').textContent = this.name;
  }

  _setEventListeners(newCard) {
    newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', this._addLike);
    newCard.querySelector('.mesto-card__trash').addEventListener('click', this._deleteCard);
    newCard.querySelector('.mesto-card__photo').addEventListener('click', this._showPhoto);
  }

  createMestoCard() {
    const newCard = this.template.content.cloneNode(true);
    this._getTemplate(newCard);
    this._setEventListeners(newCard);
    return newCard;
  }
};

