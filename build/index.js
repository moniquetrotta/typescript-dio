"use strict";
//classes
class Character {
    constructor(stregth, skill) {
        // this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1);
