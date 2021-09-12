export class UserInfo {
  constructor({ nameSelector, aboutSelector, fotoSelector, handleClick }) {
    this.profileTitle = document.querySelector(nameSelector);
    this.profileSubtitle = document.querySelector(aboutSelector);
    this.fotoContainer = document.querySelector(fotoSelector);
    this.handleClick = handleClick;
  }

  _updateUserInfoOnPage() {
    this.profileTitle.textContent = this.userInfo.name;
    this.profileSubtitle.textContent = this.userInfo.job;
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
    this.fotoContainer.addEventListener('click', this.handleClick);
  }
}
