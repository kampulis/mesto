export class Section {
  constructor({ api, renderer }, selector) {
    this.api = api;
    this.renderer = renderer;
    this.container = document.querySelector(selector);
    this.onSuccess = this.onSuccess.bind(this);
  }

  initCards() {
    this.api.getInitialCards(this.onSuccess);
  }

  onSuccess(data) {
    this.items = data;
    // let pik = document.querySelector('.mesto-card__subtitle-icon-like');
    // pik = data.likes;
    this.render();
  }

  render() {
    this.items.forEach(item => {
      const renderedItem = this.renderer(item);
      this.addItem(renderedItem);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
