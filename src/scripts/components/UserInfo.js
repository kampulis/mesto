export class UserInfo {
  constructor({ nameSelector, aboutSelector, fotoSelector, handleClick, fotoInputSelector }) {
    this.profileTitle = document.querySelector(nameSelector);
    this.profileSubtitle = document.querySelector(aboutSelector);
    this.fotoContainer = document.querySelector(fotoSelector);
    this.fotoInput = document.querySelector(fotoInputSelector);
    this.handleClick = handleClick;
  }

  _updateUserInfoOnPage() {
    this.profileTitle.textContent = this.userInfo.name;
    this.profileSubtitle.textContent = this.userInfo.about;
    this.fotoInput.value = this.userInfo.avatar;
    this.fotoContainer.src = this.userInfo.avatar;
  }

  setUserInfo(userInfo) {
    this.userInfo = userInfo;
    this._updateUserInfoOnPage();
  }

  getUserInfo() {
    return this.userInfo;
  }

  setEventListeners() {
    this.fotoContainer.addEventListener('click', (e) => {
      this._updateUserInfoOnPage();
      this.handleClick(e);
    });
  }

  updateNameAndJob({ name, job }) {
    this.userInfo.name = name;
    this.userInfo.about = job;
    this._updateUserInfoOnPage();
  }

  updateAvatarUrl(url) {
    this.userInfo.avatar = url;
    this._updateUserInfoOnPage();
  }
}
