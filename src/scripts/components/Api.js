export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(this.baseUrl + 'cards/', { headers: this.headers })
      .then(this._checkResponse);
  }

  getInfoAboutPeople() {
    return fetch(this.baseUrl + 'users/me/', { headers: this.headers })
      .then(this._checkResponse);
  }

  updateEditProfile(profileData) {
    return fetch(
      this.baseUrl + 'users/me/',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(profileData),
      },
    ).then(this._checkResponse);
  }

  updateEditAvatar(avatarUrl) {
    return fetch(
      this.baseUrl + 'users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar: avatarUrl }),
      },
    ).then(this._checkResponse);
  }

  addNewСard(cardData) {
    return fetch(
      this.baseUrl + 'cards',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(cardData),
      },
    ).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(
      this.baseUrl + 'cards/' + cardId,
      {
        method: 'DELETE',
        headers: this.headers,
      },
    ).then(this._checkResponse);
  }

  updateLike(cardId, isDelete) {
    return fetch(
      this.baseUrl + 'cards/likes/' + cardId,
      {
        method: isDelete ? 'DELETE' : 'PUT',
        headers: this.headers,
      },
    ).then(this._checkResponse);
  }
}
