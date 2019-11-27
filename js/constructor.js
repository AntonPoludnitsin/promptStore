class MainMenu {
  constructor() {
    this.title = 'Главная страница';
    this.actionListItems = ['Товары', 'Корзина'];
    this.menu = [{
      name: 'Товары',
      action: function () {
        this.goto();// to goods
      }
    },
    {
      name: 'Корзина',
      action: function () {
        this.goto();//to Cart
      }
    }]
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
    let listTitle = this.actionListItems;
    let body = listTitle.map(item => listTitle.indexOf(item) + 1 + '. ' + item + '\n').join("");
    /* for (let i = 0; i < items.length; i++) {
      body += `${i + 1}. ${items[i]}\n`;
    } */
    return body;
  };
};

let menu = new MainMenu();

class MenuGoods extends MainMenu {
  constructor() {
    super();
    this.title = 'Страница товаров';
    this.actionListItems = ['Товар 1', 'Товар 2', 'Корзина', 'Оплата', 'Вернуться на главную страницу'];
    this.menu = [
      {
        name: 'Товар1',
        action: function () {
          this.addedCart();
        }
      },
      {
        name: 'Товар2',
        action: function () {
          this.addedCart();
        }
      },
      {
        name: 'Корзина',
        action: function () {
          this.goto();//to Cart
        }
      },
      {
        name: 'Оплата',
        action: function () {
          this.pay();
        }
      },
      {
        name: 'Вернуться на главную страницу',
        action: function () {
          this.goto();//to MainMenu
        }
      }
    ];

  };

  addedCart() {
    this.actionList();
    while (this.value === "1" || this.value === "2") {
      this.cart = this.cart.concat(this.actionListItems[this.value - 1]);
      this.actionList();
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

class MenuCart extends MainMenu {
  constructor() {
    super();
    this.title = 'Корзины';
    this.actionListItems = ['Оплата', 'Вернутся на главную страницу'];
    this.menu = [{
      name: 'Оплата',
      action: function () {
        this.pay();
      }
    },
      {
        name: 'Вернуться на главную страницу',
        action: function () {
          this.goto();//to MainMenu
        }
      }
    ];

  };
};

let cart = new MenuCart();
