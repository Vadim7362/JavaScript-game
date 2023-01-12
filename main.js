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

// 7.1 Array methods

/*
.push(), .pop(), .shift(), .unshift(), .splice(), .slice(), .forEach(),
.indexOf(), .includes();
*/

/*
arr.push(items) - добавить элемент в конец массива
arr.pop() - удалить элемент из конца массива
arr.shift() - удалить элемент из начала массива
arr.unshift(...items) - добавить элемент в начало массива
arr.splice([start], [deleteCount, newElements])
*/

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands);

// autoBrands.push('Lexus');
// console.log(autoBrands);

// autoBrands.splice(1, 3);
// console.log(autoBrands);


// 8. Cicles

// console.log('Start');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('Finish');

// 9. Обход массива циклом for.

// const autoBrands = ['AUDI', 'BMV', 'Mazda', 'Toyota'];

// for(i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i]);
// }

// 10. Обход массива циклом for (of).

// const autoBrands = ['AUDI', 'BMV', 'Mazda', 'Toyota'];

// for (let item of autoBrands) {
//   console.log(item);
// }

// 11. Обход массива методом forEach()

// const autoBrands = ['AUDI', 'BMV', 'Mazda', 'Toyota'];

// autoBrands.forEach(function (brand, i) {
//   console.log(`${brand} => ${i}`);
// })


// autoBrands.forEach(printBrand);

// function printBrand(brand, i) {
//   console.log(`${brand} => ${i}`);
// }


// autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));


//  12.  Объекты.

// let userName = 'Vadim';
// let age = 27;
// let isMarried = true;

// const person = {
//   userName: 'Vadim',
//   age: 27,
//   isMarried: true,
//   profession: 'JS DEVELOPER'
// }

// console.log(person);
// console.log(person.userName);
// console.log(person['age']);

// let propertyName = 'profession';
// console.log(person[propertyName]);

// person.nationaliti = 'Russian';
// console.log(person); 

// delete person.isMarried;
// console.log(person);

// 13. Методы в объектах.

// const person = {
//   userName: 'Vadim',
//   age: 27,
//   isMarried: true,
//   sayHi: function (name) {
//     console.log(`Hello ${name}!`)
//   }
// };

// person.sayHi('Oleg');

// 14. Ключевое слово this.

// const person = {
//   userName: 'Vadim',
//   age: 27,
//   isMarried: true,
//   sayHi: function (yourName) {
//     console.log(this);
//     console.log(`Hello ${yourName}! My name is ${this.userName}.`);
//   }
// };

// person.sayHi('Oleg');

// 15. Обход объекта циклом for in (не путать с for of).

// В отличии от for of, for in может обходить неитерируемые 
// объекты и возвращает ключи.

// const person = {
//   userName: 'Vadim',
//   age: 27,
//   isMarried: true,
//   sayHi: function (yourName) {
//     console.log(this);
//     console.log(`Hello ${yourName}! My name is ${this.userName}.`);
//   }
// };

// for (let key in person) {
//   console.log(key, ':', person[key]);
// }

// 17.  Классы. Конструкторы объектов.

//class Person {
//   constructor(userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }

//   sayHi (name) {
//     console.log(`Hello ${name}! My name is ${this.userName}.`);
//   }
// }

// const person1 = new Person('Vadim', 27, true);
// const person2 = new Person('Oleg', 32, false);
// const person3 = new Person('Mariya', 2, false);

// console.log(person1);
// console.log(person2);
// console.log(person3);
// person1.sayHi('Anastasiya');
// person2.sayHi('Evgeniy');
// person3.sayHi('Dmitriy');


// Выбор DOM элементов
// Выбор одного DOM элемента по селектору
// document.querySelector('selector');

// document.querySelector('h2').classList.add('red');

// const heading2 = document.querySelector('h2');
// heading2.classList.add('blue');

// document.querySelector('.heading-3').classList.add('green');

// Выбор коллекции элементов

// const headings = document.querySelectorAll('h2');
// console.log(headings);

// for (let heading of headings) {
//   heading.classList.add('red-text');
// }

// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// 1 Вариант через for of
// for (let p of paragraphs) {
//   p.classList.add('green-text');
// };

// 2 Вариант через forEach
// paragraphs.forEach(function (p) {
//   p.classList.add('green-text');
// });

// Также есть следующие методы (менее распространенные ES5)

// document.getElementsByClassName('link'); //Выбор коллекции элементов по CSS классу.
// document.getElementsByTagName('h2'); // Выбор коллекции элементов по тегу.
// document.getElementById('header'); // Выбор одного элемента по id.


// ==============Работа с CSS Классами======================

/*
element.classList.add();
.add();
.remove();
.toggle();
.contains();
*/

// const heading = document.querySelector('h2');
// console.log(heading);


// heading.classList.add('red-text');
// heading.classList.remove('red-text');

// heading.classList.toggle('green-text');
// heading.classList.toggle('green-text');

// if (heading.classList.contains('green')) {
//   heading.classList.remove('green');
// } else {
//   heading.classList.add('red-text');
// }

// heading.classList.add('red'); 



//==============Работа с атрибутами==================

/*
getAttribute(attreName) - возвращает значение указанного атрибута
setAttribute(name, value) - добавляет указанный атрибут и его значение к элементу
hasAttribute(attreName) - возвращает true при наличии у элемента указанного атрибута
removeAttribute(attreName) - удаляет указанный атрибут


toggleAttribute(name, force) - добавляет новый атрибут при отсутствии, либо удаляет
существующий
hasAttributes() - возвращает true, если у элемента имеются какие-либо атрибуты
getAttributsNames() - возвращает названия атрибутов элемента
*/

// const img = document.querySelector('#logo');

// img.setAttribute('src', './img/php.png');
// img.setAttribute('width', '200');
// img.src = ('./img/js.png');

// const button = document.querySelector('#button');
// button.setAttribute('value', 'Отправить');
// button.value = 'Текст для кнопки';


//============Работа с прослушкой событий===================

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = 'Delete';

// button.addEventListener('click', function() {
//   console.log('Click 1');
//   img.remove();
// });

// button.onclick = function() {
//   console.log('click');
//   img.remove();
// }


//============Работа с прослушкой событий (Форма)===================

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', function() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// });

// inputText.addEventListener('input', () => {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// });

// inputText.addEventListener('input', inputHandler);

// function inputHandler() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// };

//==============Объект event=====================================

// const list = document.querySelector('#list');

// list.addEventListener('click', function(event) {
  // console.log(this);
  // console.log(event);
  // console.log(event.target);
// });



//============Работа с елементами==================================

/*
Создать элемент
document.createElement('tag-name');

Изменить HTML содержимое внутри элемента
element.innerHTML = '';

Изменить текстовое содержимое внутри элемента
node.innerText = '';

Клонирование элемента
node.cloneNode() // true - с внутреннит содержимым (текст и теги)
false - без внутреннего содержимого;

Вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings);

Удалить элемент
element.remove();
*/


//Выбор контейнера

// const container = document.querySelector('#elementsContainer');

//Создание заголовка

// const newHeader = document.createElement('h1');
// newHeader.innerText = 'New header';
// container.append(newHeader);

// Копирование шапки

// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// Вставка разметки через строки

// const htmlExample = '<h2>Еще один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);

// Вставка разметки через шаблонные строки

// const title = 'Text title';
// const htmlExample = `<h2>${title}</h2>`;
// container.insertAdjacentHTML('beforeend', htmlExample);


//============ToDo список задач===================================

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);

// function formHandler(event) {
//   event.preventDefault();

//   const taskText = todoInput.value;

  // Создаем li через разметку
  // const li = `<li>${taskText}</li>`;
  // todoList.insertAdjacentHTML('beforeend', li);

  // Создаем li с помощью создания элемента;

//   const newTask = document.createElement('li');
//   newTask.innerText = taskText;

//   const deleteBtn = document.createElement('button');
//   deleteBtn.setAttribute('role', 'button');
//   deleteBtn.innerText = 'Удалить';
//   deleteBtn.style['margin-left'] = '15px';
//   newTask.append(deleteBtn);

//   deleteBtn.addEventListener('click', function() {
//     this.closest('li').remove();
//   });


//   todoList.append(newTask);

//   todoInput.value = '';

//   todoInput.focus();
// };

//=============setInterval==============================================================

// const timerIntervalID = setInterval(function() {
//   console.log('Fired!');
// }, 1000);

// clearInterval(timerIntervalID);


//===============setTimeout==============================================================

// const timerID = setTimeout(function() {
//   console.log('setTimeout Fired!');
// }, 2000);

// clearInterval(timerID);


//=============setInterval + setTimeout==================================================

// const timerID = setInterval(function() {
//   console.log('setInterval lets go!');
// }, 1000);

// setTimeout(function(){
//   clearInterval(timerID);
// }, 10000);