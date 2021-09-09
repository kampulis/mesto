export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards(onSuccess) {
    fetch(this.baseUrl + 'cards', { headers: this.headers })
      .then((res) => {
        res.json().then(data => onSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInfoAboutPeople(onSuccess) {
    fetch(this.baseUrl + 'users/me/', { headers: this.headers })
      .then((res) => {
        res.json().then(data => onSuccess(data));
      })
      .catch((err) => {
        console.log(err);
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
    ).then((data) => {
      if (data.ok) {
        onSuccess(avatarUrl);
      }
    }).catch(() => {
      alert("Ошибка обновления аватара");
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
    ).then((data) => {
      data.json().then(data => {
        onSuccess(data);
      });
    }).catch(() => {
      alert("Пау-пау-пау-пааааау");
    });
  }

  deleteCard(cardId, onSuccess) {
    fetch(
      this.baseUrl + 'cards/' + cardId,
      {
        method: 'DELETE',
        headers: this.headers,
      },
    ).then((data) => {
      if (data.ok) {
        data.json().then(data => {
          onSuccess(data);
        });
      } else {
        alert("Пау-пау-пау-пааааау");
      }
    }).catch(() => {
      alert("Пау-пау-пау-пааааау");
    });
  }

  updateLike(cardId, onSuccess, isDelete) {
    fetch(
      this.baseUrl + 'cards/likes/' + cardId,
      {
        method: isDelete ? 'DELETE' : 'PUT',
        headers: this.headers,
      },
    ).then((data) => {
      if (data.ok) {
        data.json().then(data => {
          onSuccess(data);
        });
      } else {
        alert("Пау-пау-пау-пааааау");
      }
    }).catch(() => {
      alert("Пау-пау-пау-пааааау");
    });
  }

}
