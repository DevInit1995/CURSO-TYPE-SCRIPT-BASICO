// Type

type Order = {
    prodductId: string,
    price: number
}

type User = {
    firstName: string; 
    age: number;
    email: string;
    password?: string;  // ? type como opcional
    orders: Order[]; // lista do objeto Order
    register(): string;
}

const user: User = {
    firstName: "Jhon",
    age: 28,
    email: "jhon@exemple.com",
    password: "123456",
    orders: [{prodductId: "1", price: 200} ],
    register() {
        return "Jhon";
    }
};

const printLog = (message: string) => {}

// ! ==> Define password como definida 
// ou seja string e não undefinied
printLog(user.password!); 

// Unions
// União de 2 types
type Author = {
    books: string[];
};

const author: Author & User = {
    age: 2,
    books: ["1"],
    email: "jhon@exemple.com",
    firstName: "Jhon Santos",
    orders: [],
    register() {
        return "Jhon";
    }
};

// Interfaces
interface UserInterface {
    readonly firstName: string;
    email: string;
    login(): string; 
};

const emailUser: UserInterface = {
    email: "jhon@exemple.com",
    firstName: "Jhon",
    login() {
        return "Jhon";
    },
};

interface AuthorInterface {
    books: string[],
};

// Union
const newAuthor: UserInterface & AuthorInterface = {
    email: "author@gmail.com",
    firstName: "Jhon",
    books: [],
    login() {
        return "Jhon";
    },
};

// Type Grade
type Grade = number | string;
const grade: Grade = 1;

