//classes
//data modifiers - public, private[só a classe enxerga], protected[classes e subclasses]

class Character {
  protected name?: string; //o nome pode ser opcional
  readonly stregth: number;
  skill: number;

  constructor( name: string, stregth: number, skill: number){
  this.name = name;
  this.stregth =  stregth;
  this.skill = skill;
  }
  attack(): void{ //ele n retorna nada 
    console.log (`Attack with ${this.stregth} points`);
  }
}

const p1 = new Character("Ryu", 10, 98);
p1.attack();
console.log(p1);