//  1. Вывод в консоль
// console.log('Hello world!');

// 2. Переменные
// let userName = 'Вадим';
// console.log(userName);

// 2.1 Типы переменных
//  new standart ES6
//  let - variable
//  const - constanta

// old standart ES5
//  var - variable

// // 2.2 Data types
// let userName = 'Vadim'; // string;
// let number = 27; // number;
// let isMarried = true; // boolean true/false;

// // Динамическая типизация
//  let someVariable = 'Some value'; // now someVariable type string;
// someVariable = 50; // now someVariable type number;
// someVariable = false; // now someVariable type boolean;

// // value null
// let age = 32;
// console.log(age);
// age = null;
// console.log (age);

// //  value undefined
// let wifeName;
// console.log(wifeName);

// // Object
// // Arrays

// // operator typeof
// const someName = true;
// console.log(typeof someName);

// // BigInt (job with big numbers)
// // Symbol


// 3. Operators comparisons and conditions

// Operators comparisons
// >,<,>=,<=
// ==
// ===
// !=
// !==

// Conditions
// const time = 12;
// if (time < 12 && time >= 5) {
//   console.log('Good morning');
// }
// else if (time >= 12 && time < 18) {
//   console.log('Good day');
// }
// else if (time >= 18 && time < 22) {
//   console.log('Good evening');
// }
// else {
//   console.log('Good naight');
// }

// Logical operators

// &&  logical and
// ||  logical or
// !true  logical not


// 4. ternary operator
// if (10 < 12) {
//   console.log('condition true');
// }
// else {
//   console.log('condition false');
// }

//20 < 12 ? console.log('condition true') : console.log('condition false');


// let greeting;
// let time = 10;
// if (time < 12) {
//   greeting = 'Good morning';
// }
// else {
//   greeting = 'Good day';
// }
// console.log(greeting);

// let time = 20;
// let greeting = time < 12 ? 'Good morning' : 'Good day';
// console.log(greeting);


// 5. Конкатенация строк и щаблонные строки

// Конкатенация string + string
//  const userName = 'Pavel';
//  console.log('Hello, ' + userName + '! How are you?');

//  // Щаблонные строки и интерполяция
//  console.log(`Hello, ${userName}! How are you?`); 

// 6. Function
// DRY - don't repeat yourself

// function sayHi() {
//   console.log('Hello diar user!');
// }
// sayHi();

// Function declaration

// function sayHi() {
//   alert('Hello diar user');
// }
// sayHi();

// Function expression

// const sayHi = function() {
//   alert('Hi my diar fried');
// }
// sayHi();

// 6.1 Parameters and arguments for function

// function sayHi(name) {
//   console.log(`Hello, ${name}! Howe are you?`);
// }
// sayHi('Oleg');
// sayHi('Vadim');
// sayHi('Igor');


// 6.2 Return

// function summ(a, b) {
//   console.log('Start');
//   const result = a + b;
//   return result;

// }

// let res = summ(10, 15);
// console.log(res);


// 6.3 Function as an argument

// function summ(a, b) {
//   return a + b;
// }

// const result = summ(15, 20) + summ(10, 30);
// console.log(result);


// function summ(a, b) {
//   return a + b;
// }

// function diff(a, b) {
//   return a - b;
// }

// function doSomething(func) {
//   let result = func(10, 15);
//   console.log(result);
// }

// doSomething(summ);
// doSomething(diff);



// 6.4 Самовызывающаяся функция IIFE

// (function() {
//   console.log('Hello diar user!');
// })();

// let res = (function(a, b) {
//   return a + b;
// })(10, 15);

// console.log(res);

// 6.5 Arrow functions

// const summ = (a, b) => a + b;

// const res = summ(10, 40);
// console.log(res);


// 7 Arrays

// const autoBrands1 = 'Audi';
// const autoBrands2 = 'BMW';
// const autoBrands3 = 'Mazda';
// const autoBrands4 = 'Toyota';

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands);
// console.log(autoBrands.length); // Длинна массива, кол-во элементов
// console.log(autoBrands[0]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);



