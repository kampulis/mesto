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

  updateEditProfile(profileData) {
    fetch(
      this.baseUrl + 'users/me/',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(profileData),
      },
    ).then(() => {
      alert("Профиль успешно обновлен");
    })
      .catch(() => {
        alert("Ошибка обновления профиля");
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
        alert("Ваша картинка успешно добавлена");
        console.log('response:', data);
      });
    })
      .catch(() => {
        alert("Пау-пау-пау-пааааау");
      });
  }
}
