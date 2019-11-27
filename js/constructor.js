class MainMenu {
  constructor() {
    this.title = 'Главная страница';
    this.menu = [{
      id: 0,
      name: 'Товары',
      action: function () {
        menu.actionList();
      }
    },
    {
      id: 1,
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
    let body = this.menu.map(item => (item.id + 1) + '. ' + item.name + '\n').join("");    
    return body;
  };
  show() {
    this.actionList();
    if (+this.value === 1) {
      goods.actionList()
    }
    if (+this.value === 2) {
      cart.actionList()
    }
  }
};

let menu = new MainMenu();

class MenuGoods extends MainMenu {
  constructor() {
    super();
    this.title = 'Страница товаров';
    this.menu = [
      {
        id: 0,
        name: 'Товар1',
        action: function () {
          this.addedCart();
        }
      },
      {
        id: 1,
        name: 'Товар2',
        action: function () {
          this.addedCart();
        }
      },
      {
        id: 2,
        name: 'Корзина',
        action: function () {
          this.goto();//to Cart
        }
      },
      {
        id: 3,
        name: 'Оплата',
        action: function () {
          this.pay();
        }
      },
      {
        id: 4,
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
      //this.cart = this.cart.concat(this.actionListItems[this.value - 1]);
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
