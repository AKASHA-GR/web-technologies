/*const name = "Akasha";

console.log(`Hello, ${name}!`);
console.error("This is an error message");
console.warn("This is a warning message");
*/


const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log(`Hello, ${name}!`);
console.log();

//basic primitive data types
//string,number,boolean,null,undefined  
const age = 25; //number
const isStudent = true; //boolean
const city = null; //null
let country; //undefined
console.log(`Age: ${age}, Is Student: ${isStudent}, City: ${city}, Country: ${country}`);
console.log();

//variables and constants
//let,const-block-scoped, var-function-scoped
let x = 10;
const y = 20;
console.log(`x: ${x}, y: ${y}`);
console.log();
//var is function-scoped and can be redeclared, while let and const are block-scoped and cannot be redeclared.


//arthematic operators
const a = 10;
const b = 5;
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);
//different case of operators
const A = 10;
const B = "5";
console.log(`A + B = ${A + B}`); //string concatenation
console.log();

const C = true;
const D = "10";
console.log(`C + D = ${C + D}`); //boolean to string conversion
console.log();

const E = false;
const F = 5;
console.log(`E + F = ${E + F}`); //boolean to number conversion
console.log();

const G = null;
const H = 10;
console.log(`G + H = ${G + H}`); //null to number conversion
console.log();



//type coercion
const num = 10;
const str = "20";
console.log(`num + str = ${num + Number(str)}`); //explicit conversion
console.log();

const bool = true;
console.log(`bool + num = ${Number(bool) + num}`); //boolean to number conversion
console.log();  

const nullValue = null;
console.log(`nullValue + num = ${Number(nullValue) + num}`); //null to number conversion

const undefinedValue = undefined;
console.log(`undefinedValue + num = ${Number(undefinedValue) + num}`); //undefined to number conversion

