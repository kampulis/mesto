export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this.profileTitle = document.querySelector(nameSelector);
    this.profileSubtitle = document.querySelector(aboutSelector);
    console.log('title:', this.profileTitle);
    console.log('subtitle:', this.profileSubtitle);
  }

  getUserInfo() {
    return {
      name: this.profileTitle.textContent,
      about: this.profileSubtitle.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this.profileTitle.textContent = name;
    this.profileSubtitle.textContent = about;
  }
}