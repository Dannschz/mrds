class Carrito {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
      this.items.push(item);
  }
}

module.exports = Carrito;
