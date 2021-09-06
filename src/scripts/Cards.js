export class Card {
  constructor(
    api,
    { name, link, likes, id, owner },
    isOwner,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleSubmitDelete,
    handleDiscardDelete
  ) {
    this.id = id;
    this.api = api;
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.owner = owner;
    this.isOwner = isOwner;

    this.template = document.querySelector(templateSelector);
    this.handleCardClick = handleCardClick;
    this.handleSubmitDelete = handleSubmitDelete;
    this.handleDiscardDelete = handleDiscardDelete;
    this.handleDeleteClick = handleDeleteClick;
  }

  /** Попап добавления новой карточки */

  _addLike(e) {
    e.target.classList.toggle('mesto-card__subtitle-icon_active');
  }

  _deleteCard(e) {
    const card = e.target.closest('.mesto-card');

    this.api.deleteCard(this.id, () => {
      card.remove();
    });
  }

  _onDeleteButtonClick(e) {
    this.handleDeleteClick(() => { this._deleteCard(e); });
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
    newCard.querySelector('.mesto-card__trash').addEventListener('click', (e) => this._onDeleteButtonClick(e));
    newCard.querySelector('.mesto-card__photo').addEventListener('click', (e) => this._showPhoto(e));
  }

  _showTrash(newCard) {
    if (this.isOwner === true) {
      newCard.querySelector('.mesto-card__trash').style.display = "block"
    }
  }

  createMestoCard() {
    const newCard = this._getTemplate();
    const mesto = newCard.querySelector('.mesto-card__photo');
    const like = newCard.querySelector('.mesto-card__subtitle-icon-like');
    mesto.src = this.link;
    mesto.alt = this.name;
    like.textContent = this.likes.length;
    newCard.querySelector('.mesto-card__subtitle-name').textContent = this.name;
    this._showTrash(newCard);

    this._setEventListeners(newCard);
    return newCard;
  }
}

