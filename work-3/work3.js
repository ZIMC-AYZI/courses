// ================================================== SCOPE

// const test2 = 1;


// ГЛОБАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ

// const globalVariable = 'Global';
//
// function test(firstArg, secondArg) {
//   const newField = 'Scoped variable' // ДАННАЯ ПЕРЕМЕННАЯ ДОСТУПНА ВНУТРИ ДАННОЙ ФУНКЦИИ
//
//   function abc() {
//
//     const updateField = 122;
//   }
// }
//
// console.log('asd');
// console.log('asd DADA');
// const test21 = 21;
//
// test(1, 2);
//
// for (let item in Array) {
//
// }
// ================================================================ WHAT IS RETURN ??
//                                                              RETURN ВОЗРАЩАЕМОЕ ЗНАЧЕНИЕ

// function test1(a, b) {
//   console.log(a * b);
//   return a * b;
// }
//
// ================================================================ ЗАМЫКАНИЕ

// function sayHi(name) {
//   const phrase = 'Hello';
//
//   return function () {
//     console.log(phrase + ' ' + name)
//   }
// }

// const andreyPhrase = sayHi('Andrey');
// andreyPhrase();
//
// const stasPhrase = sayHi('Stas');
// stasPhrase();

// function counter() {
//   let count = 0;
//
//   return function () {
//     count++
//     console.log(count)
//   }
// }
//
// const myCounter = counter();
// myCounter();

// ================================================================== ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// function test(array, func) {
//   for (let i = 0; i < array.length; i++) {
//     func(i, array[i] );
//   }
// }
//
// function test2(idx, el) {
//   console.log(idx, el);
// }
//
// // ((el, idx, array) => )
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// test(testArray, test2)

//============================================================ 1) ForEach ( НЕ ВОЗВРАЩАЕТ НИЧЕГО )
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArray.forEach((el, idx, array) => console.log(el, 'ELEMENT'));

//============================================================ 2) MAP ( ВОЗВРАЩАЕТ НОВЫЙ МАССИВ )
let test2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// test2Array = test2Array.map((el, idx, array) => {
//   if (idx === 3) {
//     // console.log(el);
//   }
// });
test2Array = test2Array.map((el) => el + 'dada');
console.log(test2Array, 'test2Array');

//============================================================ 3) FILTER ( НВОЗВРАЩАЕТ НОВЫЙ МАССИВ )
let test3Array = [
  {
    id: 1,
    product: 'l1'
  },
  {
    id: 2,
    product: 'l2'
  },
  {
    id: 3,
    product: 'l3'
  },
  {
    id: 4,
    product: 'l4'
  }
];
let removedIdProduct = 3;
//                       ВЕРНУТЬ ВСЕ => ЧТО 'УСЛОВИЕ'
test3Array = test3Array.filter(el => el.id !== removedIdProduct);

console.log(test3Array, 'AFTER REMOVED ITEM');

//============================================================ 4) REDUCE ( ВОЗВРАЩАЕТ АККАМУЛЯТОР)
const users = [
  {
    id: 1,
    product: 'l1',
    money: 100
  },
  {
    id: 2,
    product: 'l2',
    money: 12
  },
  {
    id: 3,
    product: 'l3',
    money: 144
  },
  {
    id: 4,
    product: 'l4',
    money: 33
  }
];

const sum = users.reduce((acc, element) => acc += element.money, 0);
// acc ЭТО АККАМУЛЯТОР , КОТОРЫЙ ВПИТЫВАЕТ В СЕБЯ НОВЫЕ ДАННЫЕ НА КАЖДОЙ ИТЕРАЦИИ
console.log(sum, 'sum');

const sumFull = users.reduce((acc, element, idx) => {
  acc.push({update: true, element})

  /* обязательно нужно вернуть acc */
  return acc;
},/* стартовое значение аккамуляятора ===>>> */ []);

console.log(sumFull, 'sumFull');

//============================================================ 4) FIND
//                                   ЕСЛИ НЕ НАЙДЕТ ЭЛЕМЕНТА ПО УСЛОВИЯ ВЕРНЕТ UNDEFINED

// const poplTest = [
//   {isChecked: true, id: 1},
//   {isChecked: true, id: 2},
//   {isChecked: true, id: 3},
//   {isChecked: false, id: 4},
//   {isChecked: true, id: 5}
// ];
// const notClose = poplTest.find(el => !el.isChecked);
// console.log(notClose, 'notClose')

//======                                            SOME
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

// const poplTest = [
//   {isChecked: true, id: 1},
//   {isChecked: true, id: 2},
//   {isChecked: true, id: 3},
//   {isChecked: true, id: 4},
//   {isChecked: true, id: 5}
// ];
// const notClose = poplTest.some(el => el.isChecked === false);
// console.log(notClose, 'notClose')

//======                                            EVERY
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
//
// const poplTest = [
//   {isChecked: true, id: 1},
//   {isChecked: true, id: 2},
//   {isChecked: true, id: 3},
//   {isChecked: true, id: 4},
//   {isChecked: true, id: 5}
// ];
// const notClose = poplTest.every(el => el.id < 6);
// console.log(notClose, 'notClose')
