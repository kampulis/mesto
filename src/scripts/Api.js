export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    // ...
  }

  getInfoAboutPeople(onSuccess) {
    fetch(this.baseUrl + 'users/me/', { headers: this.headers })
      .then((res) => {
        res.json().then(data => onSuccess(data));
      });
  }
}
