// getMaxSubSum([-1, 2, 3, -9]); // == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]); // == 6
// getMaxSubSum([-1, 2, 3, -9, 11]); // == 11
// getMaxSubSum([-2, -1, 1, 2]); // == 3
// getMaxSubSum([100, -9, 2, -3, 5]); // == 100
// getMaxSubSum([1, 2, 3]); // == 6 (берём все)

// function getMaxSubSum(arr) {
//   let max = 0;
//   let partialMax = 0;

//   for (const elem of arr) {
//     partialMax += elem;
//     max = Math.max(max, partialMax);

//     if (partialMax < 0) {
//       partialMax = 0;
//     }
//   }

//   return console.log(max);
// }
//================================================================================================================
//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со
//значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// function filterRange(arr, min, max) {
//   return arr.filter((elem, index, arr) => elem >= min && elem <= max);
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4));
// console.log(filterRange([0, -3, 8, 10, 7, 5], 1, 7));

//================================================================================================================
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все
//значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать.

// function filterRangeInPlace(arr, a, b) {
//   arr.forEach((elem, index, arr) => {
//     if (elem <= a || elem >= b) {
//       arr.splice(index, 1);
//     }
//   });
//   return arr;
// }
// console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));

//==================================================================================================================
//Сортировать в порядке по убыванию
// function sortDesc(arr) {
//   return arr.toSorted((a, b) => b - a);
// }

// console.log(sortDesc([5, 2, 1, -10, 8]));

//===================================================================================================================
//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// function copySorted(array) {
//   return array.toSorted((a, b) => a.localeCompare(b));
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// console.log(copySorted(arr));
// console.log(arr);

//==================================================================================================================

// function Calculator() {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };
// }

// Calculator.prototype.calculate = function (string) {
//   const expresion = string.split(" ");
//   const a = Number(expresion[0]);
//   const b = Number(expresion[2]);
//   const operation = expresion[1];

//   if (!operation || isNaN(a) || isNaN(b)) {
//     return console.log("We have some error");
//   }

//   return this.methods[operation](a, b);
// };

// Calculator.prototype.addMethod = function (name, fn) {
//   this.methods[name] = fn;
// };

// const calc = new Calculator();
// console.log(calc.addMethod("/", (a, b) => a / b));
// console.log(calc.addMethod("*", (a, b) => a * b));
// console.log(calc.addMethod("**", (a, b) => a ** b));

// console.log(calc.calculate("0 + kll"));
// console.log(calc.calculate("0 + 1"));
// console.log(calc.calculate("3 - 1"));
// console.log(calc.calculate("6 / 2"));
// console.log(calc.calculate("2 * 2"));
// console.log(calc.calculate("2 ** 3"));

//==================================================================================================================
// const users = [
//   { name: "Вася", surname: "Пупкин", id: 1 },
//   { name: "Петя", surname: "Иванов", id: 2 },
//   { name: "Маша", surname: "Петрова", id: 3 },
// ];

// const newUser = users.map((elem) => ({
//   name: `${elem.name} ${elem.surname}`,
//   id: `${elem.id}`,
// }));

// console.log(newUser);

//==================================================================================================================
// const users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
// ];

// const sortByAge = users.toSorted(
//   (firstElem, secondElem) => firstElem.age - secondElem.age
// );
// console.log(sortByAge);

//=================================================================================================================
// function shuffle(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));
//==================================================================================================================
// const users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
// ];

// function getAverageAge(arr) {
//   const ages = users.reduce((acc, elem) => {
//     acc += elem.age;
//     return acc;
//   }, 0);

//   return Math.round(ages / arr.length);
// }

// console.log(getAverageAge(users));
//=====================================================================================================================
// function unique(arr) {
//   return arr.filter((elem, index, arr) => arr.indexOf(elem) === index);
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// console.log(unique(strings));
//======================================================================================================================
// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// function groupById(users) {
//   return users.reduce((acc, elem) => {
//     return { ...acc, [elem.id]: { ...elem } };
//   }, {});
// }

// console.log(usersById);
//==========================================================================================================================

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values));
//============================================================================================================================

// function aclean(arr) {
//   const sortedWords = arr.map((elem) =>
//     elem
//       .toLowerCase()
//       .split("")
//       .sort((a, b) => a.localeCompare(b))
//       .join("")
//   );

//   return Array.from(new Set(sortedWords));
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
//===========================================================================================================================

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);
//===========================================================================================================================

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries)); // 650

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let elem of Object.values(obj)) {
//     sum += elem;
//   }

//   return sum;
// }
//==========================================================================================================================

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(count(user)); // 2

// function count(obj) {
//   return Object.keys(obj).length;
// }
//============================================================================================================================
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let maxSalary = 0;
//   let topName = "Noone";
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       topName = name;
//     }
//   }

//   return `Top salsry is taken by ${topName} and it is ${maxSalary}`;
// }
// console.log("🚀 ~ topSalary:", topSalary(salaries));
//==================================================================================================================================

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// function multiplyNumeric(menu) {
//   for (let key of Object.keys(menu)) {
//     if (!isNaN(menu[key])) {
//       menu[key] *= 2;
//     }
//   }
// }

// console.log(menu);
//==================================================================================================================================
// let calculator = {
//   a: 0,
//   b: 0,
//   read() {
//     this.a = prompt("Enter the first number: ", 0);
//     this.b = prompt("Enter the second number: ", 0);
//   },

//   sum() {
//     return Number(this.a) + Number(this.b);
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
//====================================================================================================================================
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
//======================================================================================================================================

// function Calculator() {
//   this.a = 0;
//   this.b = 0;
//   this.read = function () {
//     this.a = prompt("a?", 0);
//     this.b = prompt("b?", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());
//========================================================================================================================================
// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value = this.value + Number(prompt("Enter your number"));
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений
//======================================================================================================================================
// const date = new Date(2024, 1, 12, 3, 15, 25);
// // console.log("🚀 ~ date:", date);
// // console.log(date.getFullYear());
// // console.log(date.getDay());

// const GMdate = new Date();
// console.log("🚀 ~ GMdate:", GMdate);
// console.log(`G: ${GMdate.getHours()}`);
//=======================================================================================================================================

// function pow(a, n) {
//   if (n === 1) {
//     return a;
//   } else {
//     return a * pow(a, n - 1);
//   }
// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
//======================================================================================================================================
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function sumSalaries(company) {
//   if (Array.isArray(company)) {
//     return company.reduce((acc, elem) => acc + elem.salary, 0);
//   } else {
//     let sum = 0;
//     for (let sub of Object.values(company)) {
//       sum += sumSalaries(sub);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));
//========================================================================================================================================

// function sumTo(n) {
//  if(n < 1){
//   return n;
//  }else{
//   let sum = 0;
//   sum = n + sumTo
//  }
// }
// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
//======================================================================================================================================
// function factorial(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     let mul = 1;
//     mul = n * factorial(n - 1);
//     return mul;
//   }
// }

// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
//======================================================================================================================================
// function duplicateEncode(word) {
//   const arr = word.toLowerCase().split("");
//   const sum = [];
//   for (let a of arr) {
//     arr.indexOf(a) === arr.lastIndexOf(a) ? sum.push("(") : sum.push(")");
//   }
//   return sum.join("");
// }
// console.log("🚀 ~ (((:", duplicateEncode("din"));
// console.log("🚀 ~ ()()():", duplicateEncode("recede"));
// console.log("🚀 ~ )())()):", duplicateEncode("Success"));
// console.log("🚀 ~ ))((:", duplicateEncode("(( @"));
//===========================================================================================================================

// function digPow(n, p) {
//   const arr = String(n)
//     .split("")
//     .map((e) => Number(e));

//   let i = p;

//   const sum = arr.reduce((acc, elem) => {
//     acc += elem ** i;
//     i += 1;
//     return acc;
//   }, 0);

//   const res = sum % n === 0 ? sum / n : -1;
//   return res;
// }

// console.log("🚀 ~ 1:", digPow(89, 1));
// console.log("🚀 ~ 2:", digPow(695, 2));
// console.log("🚀 ~ 51:", digPow(46288, 3));
// console.log("🚀 ~ -1:", digPow(92, 1));
//============================================================================================================================
// function order(words) {
//   const arr = words.split(" ");
//   const result = [];

//   arr.map((elem, i, array) => {
//     const index = Number(elem.split("").find((elem) => !isNaN(elem)));
//     result[index - 1] = elem;
//   });
//   return result.join(" ");
// }

// console.log("🚀 ~ order:", order("is2 Thi1s T4est 3a"));
// console.log("🚀 ~ order:", order("4of Fo1r pe6ople g3ood th5e the2"));
// console.log("🚀 ~ order:", order(""));
//============================================================================================================================
// function likes(names) {
//   if (names.length === 1) {
//     return `${names[0]} likes this`;
//   }

//   if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   }

//   if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   }

//   if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }

//   return "no one likes this";
// }

// console.log(likes([])); // "no one likes this"
// console.log(likes(["Peter"])); //"Peter likes this"
// console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this
// console.log(likes(["Max", "John", "Mark"])); //"Max, John and Mark like this
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //"Alex, Jacob and 2 others like this"
//=============================================================================================================================
// function whichCashier(already, friends) {
//   let indexOfArraysWithFriends = [];

//   const sortedByLength = already.toSorted((a, b) => a.length - b.length);

//   for (let friend of friends) {
//     //  console.log(sortedByLength);
//     // console.log(friend);
//     indexOfArraysWithFriends.push(
//       sortedByLength.findIndex((elem) => elem.includes(friend))
//     );
//   }

//   if (indexOfArraysWithFriends.length > 1) {
//     return indexOfArraysWithFriends[0];
//   }
//   return already.indexOf(sortedByLength[0]);
// }

// console.log(
//   whichCashier(
//     [["July", "Sand", "Desong", "Linda"], ["Goly"], ["Keven", "Lax"]],
//     ["Linda", "Keven"]
//   )
// ); //2
// console.log(
//   whichCashier([["Lax", "Bola"], ["Sint"], ["Fason", "Dit"]], ["Sint", "Fason"])
// ); //1
// console.log(
//   whichCashier(
//     [
//       ["Bingo", "Lora"],
//       ["Kint", "Masons"],
//       ["Relade", "Ginta"],
//     ],
//     []
//   )
// );
//=======================================================================================================================================
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inBetween(a, b) {
//   return function (elem) {
//     return elem >= a && elem <= b;
//   };
// }

// function inArray(arr) {
//   return function (elem) {
//     return arr.includes(elem);
//   };
// }
//=======================================================================================================================================
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// users.sort(byField("name"));
// //users.sort(byField("age"));

// function byField(fieldName) {
//   return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// console.log(users);
//=====================================================================================================================================

// function makeCounter() {
//   makeCounter.count = 0;

//   makeCounter.set = function (value) {
//     makeCounter.count = value;
//   };

//   makeCounter.decrease = function () {
//     makeCounter.count--;
//   };

//   return function counter() {
//     makeCounter.count++;
//   };
// }

// const counter = makeCounter();

// counter();
// counter();
// counter();

// console.log(makeCounter.count);

// makeCounter.set(10);
// console.log(makeCounter.count);

// makeCounter.decrease();
// makeCounter.decrease();
// makeCounter.decrease();

// console.log(makeCounter.count);
//===============================================================================================================================
// console.log(sum(1)(2));
// console.log(sum(1)(2)(3));
// console.log(sum(5)(-1)(2));
// console.log(sum(6)(-1)(-2)(-3));
// console.log(sum(0)(1)(2)(3)(4)(5));

// function sum(value) {
//   sum.currentValue = value;

//   function fn(b) {
//     sum.currentValue += b;
//     console.log(sum.currentValue);

//     return fn;
//   }

//   fn.toString = function () {
//     return sum.currentValue;
//   };

//   return fn;
// }
//==================================================================================================================================
