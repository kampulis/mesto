export class UserInfo {
  constructor({ nameSelector, aboutSelector, fotoSelector, handleClick, fotoInputSelector }) {
    this.profileTitle = document.querySelector(nameSelector);
    this.profileSubtitle = document.querySelector(aboutSelector);
    this.fotoContainer = document.querySelector(fotoSelector);
    this.fotoInput = document.querySelector(fotoInputSelector);
    this.handleClick = handleClick;
  }

  updateUserInfoOnPage() {
    this.profileTitle.textContent = this.userInfo.name;
    this.profileSubtitle.textContent = this.userInfo.about;
    this.fotoInput.value = " ";
    this.fotoContainer.src = this.userInfo.avatar;
  }

  setUserInfo(userInfo) {
    this.userInfo = userInfo;
    this.updateUserInfoOnPage();
  }

  getUserInfo() {
    return this.userInfo;
  }

  updateNameAndJob({ name, job }) {
    this.userInfo.name = name;
    this.userInfo.about = job;
    this.updateUserInfoOnPage();
  }

  updateAvatarUrl(url) {
    this.userInfo.avatar = url;
    this.updateUserInfoOnPage();
  }
}
