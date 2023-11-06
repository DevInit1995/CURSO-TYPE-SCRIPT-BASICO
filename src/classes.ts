// classes e interfaces

interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    // modificadores de classes
    readonly id: number; 
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // tipagem de metódos
    sayMyName(): string {
        return this.name;
    }
}

// Mesma coisa que acima
class PersonRefact {
    constructor(
        readonly id: number; 
        protected name: string;
        private age: number;
    ) {}
}

class Employe extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoAmI(){
        return this.name;
    }
}


const jhon = new Person(1, "Jhon", 28);
