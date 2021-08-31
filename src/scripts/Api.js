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

  addNewcard(profileData) {
    fetch(
      this.baseUrl + 'cards',
      {
        method: 'POST',
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
}
