"use strict";
// Type
const user = {
    firstName: "Jhon",
    age: 28,
    email: "jhon@exemple.com",
    password: "123456",
    orders: [{ prodductId: "1", price: 200 }],
    register() {
        return "Jhon";
    }
};
const printLog = (message) => { };
// ! ==> Define password como definida 
// ou seja string e não undefinied
printLog(user.password);
const author = {
    age: 2,
    books: ["1"],
    email: "jhon@exemple.com",
    firstName: "Jhon Santos",
    orders: [],
    register() {
        return "Jhon";
    }
};
;
const emailUser = {
    email: "jhon@exemple.com",
    firstName: "Jhon",
    login() {
        return "Jhon";
    },
};
;
// Union
const newAuthor = {
    email: "author@gmail.com",
    firstName: "Jhon",
    books: [],
    login() {
        return "Jhon";
    },
};
const grade = 1;
