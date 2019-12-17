let modelCart = [];
let cartEnding = [{
  name: 'Оплата',
  action: function () {
    this.pay();
  }
},
{
  name: 'Вернуться на главную страницу',
  action: () => menu.show()
}
];

class Menu {
  constructor() {
    this.title = 'Главная страница';
    this.menu = [];
    this.value = null;
  };
  print() {
    alert("Нет такого пукта меню");
    this.show()
  };
  actionList() {
    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n');
  };
  actionListBody() {
    let body = this.menu.map((item, index) => {
      return (index + 1) + '. ' + item.name + '\n'
    }).join("");
    return body;
  };
  show() {
    this.actionList();
  };
};

class MainMenu extends Menu {
  constructor() {
    super();
    this.menu = [{
      name: 'Товары',
      action: () => goods.addedCart()
    },
    {
      name: 'Корзина',
      action: () => cart.addedCart()
    }];
  };

  actionList() {
    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n' +
      `Страница: ${this.title}\nМеню:\n${this.actionListBody()}`,
    );
  };

  print() {
    alert("Нет такого пукта меню");
    this.show();
  };

  show() {
    this.actionList();
    if (+this.value > this.menu.length) {
      this.print();
    } else {
      this.menu[this.value - 1].action();
    }
  }
};

let menu = new MainMenu();

class MenuGoods extends Menu {
  constructor() {
    super();
    this.title = 'Страница товаров';
    this.menu = [
      {
        name: 'Товар1',
        action: () => {
          modelCart.unshift({ name: this.menu[this.value - 1].name });
          this.addedCart();
        }
      },
      {
        name: 'Товар2',
        action: () => {
          modelCart.unshift({ name: this.menu[this.value - 1].name });
          this.addedCart();
        }
      },
      {
        name: 'Корзина',
        action: () => {
          cart.addedCart();
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
        action: () => menu.show()
      }
    ];

  };

  actionList() {
    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n' +
      'Корзина ' + (modelCart.length) + '\n' +
      `Страница: ${this.title}\nМеню:\n${this.actionListBody()}`,
    );
  };

  print() {
    alert("Нет такого пукта меню");
    this.addedCart();
  };

  addedCart() {
    this.actionList();
    if (+this.value > this.menu.length) {
      this.print();
    } else {
      this.menu[this.value - 1].action();
    }
  };

};

let goods = new MenuGoods();

class MenuCart extends Menu {
  constructor() {
    super();
    this.title = 'Корзины';
  };

  actionList() {
    modelCart.forEach((good, index) => {
      good.action = () => { 
        modelCart.splice(index, 1); 
        this.addedCart();
      };
    });
    this.menu = modelCart.concat(cartEnding);

    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n' +
      `Страница: ${this.title}\nМеню:\n${this.actionListBody()}`,
    );
  };

  addedCart() {
    this.actionList();
    if (+this.value > this.menu.length) {
      this.print();
    } else {
      this.menu[this.value - 1].action();
    }
  };
};

let cart = new MenuCart();