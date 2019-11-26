class Menu {
  constructor() {
    this.title = 'Главная страница';
    this.actionListItems = ['Товары', 'Корзина'];
    this.value = null;
    this.cart = [];
  };
  print() {
    return alert("Нет такого пукта меню");
  };
  actionList() {
    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n' +
      `Страница: ${this.title}\nМеню:\n${this.actionListBody()}`,
    );
  };
  actionListBody() {
    let items = this.actionListItems;
    let body = '';
    for (let i = 0; i < items.length; i++) {
      body += `${i + 1}. ${items[i]}\n`;
    }
    return body;
  };

};

let menu = new Menu();

class MenuGoods extends Menu {
  constructor() {
    super();
    this.title = 'Страница товаров';    
    this.actionListItems = ['Товар 1', 'Товар 2', 'Корзина', 'Оплата', 'Вернутся на главную страницу'];
  };
  addedCart() {
    this.actionList();
    while (this.value === "1" || this.value === "2") {
      this.cart = this.cart.concat(this.actionListItems[this.value - 1]);
      this.actionList();
      console.log(this.cart);
      console.log(this.value);
    }
    if (this.value === "5") {
      menu.actionList();
    }
    if (this.value === "3") {
      cart.actionListItems = this.cart.concat(cart.actionListItems);
      cart.actionList();
    }
  };
};

let goods = new MenuGoods();

class MenuCart extends Menu {
  constructor() {
    super();
    this.title = 'Корзины';    
    this.actionListItems = ['Оплата', 'Вернутся на главную страницу'];
  };
};

let cart = new MenuCart();




