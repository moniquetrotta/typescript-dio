//classes
class Character {
  name?: string; //o nome pode ser opcional
  stregth: number;
  skill: number;

  constructor( stregth: number, skill: number){
  // this.name = name;
  this.stregth =  stregth;
  this.skill = skill;
  }
  attack(): void{ //ele n retorna nada 
    console.log (`Attack with ${this.stregth} points`);
  }
}

const p1 = new Character(10, 98);
p1.attack();
