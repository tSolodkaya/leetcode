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
