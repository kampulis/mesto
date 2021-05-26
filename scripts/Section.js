class Section {
  constructor({ items, renderer }, selector) {
    this.items = items;
    this.renderer = renderer;
    this.selector = selector;
  }

  render() {
    this.renderer();
  }

  addItem(element) {
    const container = document.querySelector(this.selector);
  }
}