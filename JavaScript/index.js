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
console.log();

const strNum = "10";
console.log(`strNum * 2 = ${Number(strNum) * 2}`);  
console.log();

const value = "5567";
const value1 = "54567.67";
const value2 = "34567abc";
const v = 10;
console.log(parseInt(value) + v); //string to number conversion
console.log(parseFloat(value1) + v); //string to number conversion
console.log(parseInt(value2) + v); //string to number conversion
console.log(value2.toString() + v); //number to string conversion
console.log();


//comparison operators
const num1 = 10;
const num2 = 20;    
console.log(`num1 > num2: ${num1 > num2}`);
console.log(`num1 < num2: ${num1 < num2}`);
console.log(`num1 >= num2: ${num1 >= num2}`);
console.log(`num1 <= num2: ${num1 <= num2}`);
console.log(`num1 == num2: ${num1 == num2}`);
console.log(`num1 === num2: ${num1 === num2}`);
console.log();

const str1 = "Hello";
const str2 = "World";
console.log(`str1 > str2: ${str1 > str2}`); 
console.log();

//equality operators
//==, ===
//== checks for value equality with type coercion, while === checks for both value and type equality without type coercion.
const bool1 = true;
const bool2 = undefined;
console.log(`bool1 == bool2: ${bool1 == bool2}`);
console.log(`bool1 === bool2: ${bool1 === bool2}`);
console.log();

const nullValue1 = null;
const value3 = false;
console.log(`nullValue1 == value3: ${nullValue1 == value3}`);
console.log(`nullValue1 === value3: ${nullValue1 === value3}`);
console.log();

const undefinedValue1 = undefined;
const value4 = null;
console.log(`undefinedValue1 == value4: ${undefinedValue1 == value4}`);
console.log(`undefinedValue1 === value4: ${undefinedValue1 === value4}`);
console.log();


//logical operators
//&&, ||, !
//&& (logical AND) returns true if both operands are true, || (logical OR) returns true if at least one operand is true, and ! (logical NOT) negates the truth value of the operand.
const boolA = true;
const boolB = false;
console.log(`boolA && boolB: ${boolA && boolB}`);
console.log(`boolA || boolB: ${boolA || boolB}`);
console.log(`!boolA: ${!boolA}`);
console.log(`!boolB: ${!boolB}`);
console.log();

const numA = 10;    
const numB = 20;
console.log(`(numA > 5) && (numB < 30): ${(numA > 5) && (numB < 30)}`);
console.log(`(numA < 5) || (numB < 30): ${(numA < 5) || (numB < 30)}`);
console.log(`!(numA > 5): ${!(numA > 5)}`);
console.log();

//conditional statements
//if, else if, else
const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
console.log();


const age1 = 18;
if (age1 >= 18) 
    console.log("You are an adult.");
else
    console.log("You are a minor.");
console.log();

const numb = 2 < 3 ? "that's nice " : "that's not nice";
const numb1 = 2 > 3 ? "that's nice " : "that's not nice";
console.log(numb);
console.log(numb1);
console.log();

//switch statement
const day = 3;  
switch (day) {

    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        
}

//loops
//for, while, do-while
console.log("For loop:");   
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("While loop:");
let j = 0;  
while (j < 5) {
    console.log(j);
    j++;
}
console.log("Do-while loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//arrays
//Arrays are ordered collections of values that can hold any data type, including other arrays and objects. They are defined using square brackets [] and can be accessed using zero-based indexing.
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Date");
console.log(fruits);
