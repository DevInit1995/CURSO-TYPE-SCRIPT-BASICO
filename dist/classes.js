"use strict";
// classes e interfaces
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // tipagem de metódos
    sayMyName() {
        return this.name;
    }
}
class Employe extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        return this.name;
    }
}
const jhon = new Person(1, "Jhon", 28);
