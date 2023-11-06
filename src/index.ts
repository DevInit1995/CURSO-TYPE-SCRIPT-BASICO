// Tipos Básicos

let age: number = 5;
const firstName: string = "Jhon Kennedy Alves dos Santos";
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;
idk = 123;
idk = 123.78;

// lista de numbers
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Jhon Santos", "July Karla"]

// Tupla
const person: [number, string] = [1, "Jhon"]

// Lista de Tuplas
const people: [number, string][] = [
    [1, "July"],
    [2, "Doe"],
];

// Intersections
const productId: string | number | boolean = false;

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "Esquerda"
}

const direction = Direction.Left;

// Type Assertions
const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);