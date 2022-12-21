/*1) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”*/

const frameworks = ["AngularJS", "jQuery"];
frameworks.unshift("Backbone.js");
frameworks.push("ReactJS", "Vue.js");
frameworks.splice(1, 0, "CommonJS");
const removeExtraItem = frameworks.findIndex((el) => el === "jQuery");
const removed = frameworks.splice(removeExtraItem, 1);
console.log(`Это здесь лишнее: ${removed}`);
console.log(frameworks);

//  2) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.

function removeNegativeElements(array) {
  return array.filter((el) => el >= 0 || typeof el !== "number");
}

function removeNegativeElementsFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 || typeof arr[i] !== "number") {
      result.push(arr[i]);
    }
  }
  return result;
}

let result1 = removeNegativeElements([-9, 2, 3, 0, -28, "value"]); // [2, 3, 0, 'value'];
let result2 = removeNegativeElements([-9, -21, -12]); // []
let result3 = removeNegativeElements(["-102", 102]); // ['-102', 102]

let result4 = removeNegativeElementsFor([-9, 2, 3, 0, -28, "value"]); // [2, 3, 0, 'value'];
let result5 = removeNegativeElementsFor([-9, -21, -12]); // []
let result6 = removeNegativeElementsFor(["-102", 102]);

console.log(result1, result2, result3, result4, result5, result6);

// 3) Создайте фнкцию getStringElements, которая возвращает входящий массив только со строковыми значениями.

const array = [1, true, 42, "red", 64, "green", "web", new Date(), -898, false];

function getStringElements(arr) {
  return arr.filter((el) => typeof el === "string");
}

function getStringElementsFor(arr) {
  const arrayForStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arrayForStrings.push(arr[i]);
    }
  }
  return arrayForStrings;
}

const res = getStringElements(array);
const res2 = getStringElementsFor(array);
console.log(res, res2);

//========= Задания по рекурсии НЕ ОБЯЗАТЕЛЬНЫ ========

//2.1) Напищите функцияю, которая рикурсивно суммирует все элементы массива, массив 10 элементов, заполнен случайными числами от 0 - 10, как в ДЗ ранее

let arrayNum = [];
for (let i = 0; i < 10; i++) {
  arrayNum.push(Math.floor(Math.random() * 11));
}

function sum(arr) {
    return (!arr.length) ? 0 : arr[0] + sum(arr.slice(1))
}

console.log(sum(arrayNum));

//2.2) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3] напишите функцию, рикурсивно сумирующую все элементы = 10

const arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

function sumElementsEqualToTen(arr) {
  if (!arr.length) {
    return 0;
  }
  const first = arr[0];
  const sum = first === 10 ? first : 0;
  return sum + sumElementsEqualToTen(arr.slice(1));
}

console.log(sumElementsEqualToTen(arr));

//2.3) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3 5, 6, 10, 3] напишите функцию, которая рекурсивно ищет все элементы > 5 и возвращает их ввиде массива

function findElements(arr, result = []) {
  if (!arr.length) {
    // Если массив пуст, то возвращаем результат
    return result;
  }
  // Берем первый элемент массива
  const [first, ...rest] = arr;
  if (first > 5) {
    // Если элемент > 5, то добавляем его в результирующий массив
    result.push(first);
  }
  // Продолжаем рекурсивно обрабатывать оставшуюся часть массива
  return findElements(rest, result);
}

console.log(findElements(arr));
