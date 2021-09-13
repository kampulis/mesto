export class Card {
  constructor(
    api,
    { name, link, likes, id, owner },
    currentUser,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleSubmitDeleteClick,
  ) {
    this.id = id;
    this.api = api;
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.owner = owner;
    this.currentUser = currentUser;

    this.template = document.querySelector(templateSelector);
    this.handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handleSubmitDeleteClick = handleSubmitDeleteClick;
  }

  /** Попап добавления новой карточки */

  _addLike(e) {
    const likeContainer = e.target.closest('.mesto-card__subtitle-like');
    const likeCountContainer = likeContainer.querySelector('.mesto-card__subtitle-icon-like');

    if (e.target.classList.contains('mesto-card__subtitle-icon_active')) {
      this.api.updateLike(this.id, true).then((data) => {
        e.target.classList.remove('mesto-card__subtitle-icon_active');
        likeCountContainer.textContent = data.likes.length;
      }).catch((err) => {
        console.error('Не удалось убрать лайк', err);
      });
    } else {
      this.api.updateLike(this.id).then((data) => {
        e.target.classList.add('mesto-card__subtitle-icon_active');
        likeCountContainer.textContent = data.likes.length;
      }).catch((err) => {
        console.error('Не удалось добавить лайк', err);
      });
    }
  }

  _deleteCard(e) {
    const card = e.target.closest('.mesto-card');

    this.api.deleteCard(this.id)
      .then(() => {
        card.remove();
        this.handleSubmitDeleteClick();
      })
      .catch((err) => {
        console.error('Не удалось удалить карточку', err);
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
    newCard.querySelector('.mesto-card__subtitle-icon').addEventListener('click', (e) => this._addLike(e));
    newCard.querySelector('.mesto-card__trash').addEventListener('click', (e) => this._onDeleteButtonClick(e));
    newCard.querySelector('.mesto-card__photo').addEventListener('click', (e) => this._showPhoto(e));
  }

  _showTrash(newCard) {
    if (this.currentUser._id === this.owner._id) {
      newCard.querySelector('.mesto-card__trash').style.display = "block"
    }
  }

  _showIsLiked(newCard) {
    const myLike = this.likes.find((elt) => {
      const result = elt._id === this.currentUser._id;
      return result;
    });
    if (myLike) {
      newCard.querySelector('.mesto-card__subtitle-icon').classList.add('mesto-card__subtitle-icon_active');
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
    this._showIsLiked(newCard);

    this._setEventListeners(newCard);
    return newCard;
  }
}
