"use strict";
//classes
//data modifiers - public, private[só a classe enxerga], protected[classes e subclasses]
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
p1.attack();
console.log(p1);
