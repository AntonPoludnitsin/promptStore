const data = [{
  title: "Товар1",
  country: "USA",
  widt: 400,
  height: 300,
  weight: 200
},
{
  title: "Товар2",
  country: "Europe",
  widt: 500,
  height: 350,
  weight: 500
}];

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
