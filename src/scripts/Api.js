export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards(onSuccess) {
    fetch(this.baseUrl + 'cards', { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          res.json().then(data => onSuccess(data));
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err}`);
      });
  }

  getInfoAboutPeople(onSuccess) {
    fetch(this.baseUrl + 'users/me/', { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          res.json().then(data => onSuccess(data));
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err}`);
      });
  }

  updateEditProfile(profileData, onSuccess) {
    fetch(
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
    }).catch((err) => {
      return Promise.reject(`Ошибка: ${err}`);
    });
  }

  updateEditAvatar(avatarUrl, onSuccess) {
    fetch(
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
    }).catch((err) => {
      return Promise.reject(`Ошибка: ${err}`);
    });
  }


  addNewСard(cardData, onSuccess) {
    fetch(
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
    }).catch((err) => {
      return Promise.reject(`Ошибка: ${err}`);
    });
  }

  deleteCard(cardId, onSuccess) {
    fetch(
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
    }).catch((err) => {
      return Promise.reject(`Ошибка: ${err}`);
    });
  }

  updateLike(cardId, onSuccess, isDelete) {
    fetch(
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
    }).catch((err) => {
      return Promise.reject(`Ошибка: ${err}`);
    });
  }
}
