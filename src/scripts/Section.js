export class Section {
  constructor({ items, renderer }, selector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(selector);
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
