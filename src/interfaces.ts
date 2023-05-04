//interfaces (type [tipar]x interfaces[classe])
type robot = {
  // id: number;
  // id: number | string;
  readonly id: number | string;
  name: string;
};
const bot: robot = {
  // id: 1,
  id: "1",
  name: "megamen",
}
interface robot2 {
  id: number;
  name: string;
  sayHello():string;
}
const bot2: robot2 = {
  id: 1,
  name: "megamen",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  }
}
console.log(bot);

class Pessoa implements robot2 {
  id: number;
  name: string;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello, i am ${this.name}`;
  }
}

const p = new Pessoa(1, "gutsman")
console.log(p.sayHello()); 