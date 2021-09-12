export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards(onSuccess) {
    return fetch(this.baseUrl + 'cards/', { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          res.json().then(data => onSuccess(data));
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  getInfoAboutPeople(onSuccess) {
    return fetch(this.baseUrl + 'users/me/', { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          res.json().then(data => onSuccess(data));
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  updateEditProfile(profileData, onSuccess) {
    return fetch(
      this.baseUrl + 'users/me/',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(profileData),
      },
    ).then((res) => {
      if (res.ok) {
        onSuccess();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  updateEditAvatar(avatarUrl, onSuccess) {
    return fetch(
      this.baseUrl + 'users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar: avatarUrl }),
      },
    ).then((res) => {
      if (res.ok) {
        onSuccess(avatarUrl);
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }


  addNewСard(cardData, onSuccess) {
    return fetch(
      this.baseUrl + 'cards',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(cardData),
      },
    ).then((res) => {
      if (res.ok) {
        res.json().then(data => {
          onSuccess(data);
        });
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  deleteCard(cardId, onSuccess) {
    return fetch(
      this.baseUrl + 'cards/' + cardId,
      {
        method: 'DELETE',
        headers: this.headers,
      },
    ).then((res) => {
      if (res.ok) {
        res.json().then(data => {
          onSuccess(data);
        });
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  updateLike(cardId, onSuccess, isDelete) {
    return fetch(
      this.baseUrl + 'cards/likes/' + cardId,
      {
        method: isDelete ? 'DELETE' : 'PUT',
        headers: this.headers,
      },
    ).then((res) => {
      if (res.ok) {
        res.json().then(data => {
          onSuccess(data);
        });
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }
}
