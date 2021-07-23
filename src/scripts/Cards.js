
export const popupAdd = document.querySelector(".popup_type_new-card");

export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this.name = name;
    this.link = link;
    this.template = document.querySelector(templateSelector);
    this.handleCardClick = handleCardClick;
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
    this.handleCardClick(e);
    return;
  }

  _getTemplate() {
    return this.template.content.cloneNode(true);
  }

  _setEventListeners(newCard) {
    newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', this._addLike);
    newCard.querySelector('.mesto-card__trash').addEventListener('click', this._deleteCard);
    newCard.querySelector('.mesto-card__photo').addEventListener('click', (e) => this._showPhoto(e));
  }

  createMestoCard() {
    const newCard = this._getTemplate();
    const mesto = newCard.querySelector('.mesto-card__photo');
    mesto.src = this.link;
    mesto.alt = this.name;
    newCard.querySelector('.mesto-card__subtitle-name').textContent = this.name;

    this._setEventListeners(newCard);
    return newCard;
  }
};

