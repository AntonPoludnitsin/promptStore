let titleCart = [];

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
    let counter = 0;
    let body = this.menu.map(item => {
      counter++;
      return counter + '. ' + item.name + '\n'
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
      action: () => cart.show()
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
          titleCart.push(this.menu[this.value - 1]);
          this.addedCart();
        }
      },
      {
        name: 'Товар2',
        action: () => {
          titleCart.push(this.menu[this.value - 1]);
          this.addedCart();
        }
      },
      {
        name: 'Корзина',
        action: () => {
          cart.menu = titleCart.concat(cart.menu);
          cart.show();
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
      'Корзина ' + titleCart.length + '\n' +
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
    this.menu = [{
      name: 'Оплата',
      action: function () {
        this.pay();
      }
    },
    {
      name: 'Вернуться на главную страницу',
      action: () => menu.show()
    }
    ]
  };
  
  actionList() {
    return this.value = prompt(
      'Добро пожаловать в наш магазин!\n' +
      `Страница: ${this.title}\nМеню:\n${this.actionListBody()}`,
    );
  };
  actionListBody() {
    let counter = 0;    
    let body = this.menu.map(item => {
      counter++;
      return counter + '. ' + item.name + '\n'
    }).join("");
    return body;    
  };

  show() {    
    this.actionList();
    if (+this.value === this.menu.length || 
      +this.value === this.menu.length -1) {
      this.menu[this.value - 1].action();      
    } else {
      this.print();
    }
  }
};

let cart = new MenuCart();
