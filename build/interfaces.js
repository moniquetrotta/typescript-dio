'use strict';
const bot = {
  // id: 1,
  id: '1',
  name: 'megamen',
};
const bot2 = {
  id: 1,
  name: 'megamen',
  sayHello: function () {
    throw new Error('Function not implemented.');
  },
};
console.log(bot);
class Pessoa {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  sayHello() {
    return `Hello, i am ${this.name}`;
  }
}
const p = new Pessoa(1, 'gutsman');
console.log(p.sayHello());
