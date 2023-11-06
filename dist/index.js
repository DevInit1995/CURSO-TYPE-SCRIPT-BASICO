"use strict";
// Tipos Básicos
let age = 5;
const firstName = "Jhon Kennedy Alves dos Santos";
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
idk = 123;
idk = 123.78;
// lista de numbers
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Jhon Santos", "July Karla"];
// Tupla
const person = [1, "Jhon"];
// Lista de Tuplas
const people = [
    [1, "July"],
    [2, "Doe"],
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
// Type Assertions
const productName = "Boné";
// let itemId = productName as string;
let itemId = productName;
console.log(direction);
