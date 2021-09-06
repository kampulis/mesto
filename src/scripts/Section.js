export class Section {
  constructor({ api, renderer, userInfo }, selector) {
    this.api = api;
    this.userInfo = userInfo;
    this.renderer = renderer;
    this.container = document.querySelector(selector);
    this.onSuccess = this.onSuccess.bind(this);
  }

  initCards() {
    this.api.getInitialCards(this.onSuccess);
  }

  onSuccess(data) {
    this.items = data;
    this.render();
  }

  render() {
    const { name } = this.userInfo.getUserInfo();

    this.items.forEach(item => {
      const isOwner = name === item.owner.name;
      const renderedItem = this.renderer(item, isOwner);
      this.addItem(renderedItem);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
