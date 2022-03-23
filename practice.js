// let arr = new Array();
// const testString = ['first', 'second', 'third', 'fourth', 'fifth'];
// const testObj = [{a: 1},{a: 1},{a: 1},{a: 1},{a: 1},];
// const testNum = [1,2,3,4,5,6];
// console.log(test[0]);
// test.length УЗНАТЬ ДЛИНУ МАССИВА
// console.log(testArray[testArray.length - 1])


// const testTime = '15:45';
// const timeNewFormat = testTime.split(':');


// ====================================================== SPLICE УДАЛЕТ ЕЛМЕНТ ИЗ МАССИВА И ВОЗРАЩАЕТ ЕГО
// // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// let courses = [
//   'Kirill',
//   "Leha",
//   'Vlad',
//   'Max',
//   'Sasha',
//   'Den',
//   'Capello'
// ];
// const removedUser = courses.splice(0, 1, 'new element');
// console.log(removedUser, 'removedUser');
// console.log(courses, 'AFTER REMOVE');
//
// const testString = ['first', 'second', 'third', 'fourth', 'fifth'];
// console.log(beer, 'beer');
// ======================================================PUSH/SPREAD добавляет в конец ( спред позволяет так же в начало)
// testString.push('garage');
// testString.push('garage');
// testString.push(123123);
// console.log(beer, 'beer');

// testString = [...testString, 'garage']; СПРЕД

// ========================================================SHIFT Удаляет из массива первый элемент и возвращает его:

// const firstArray = [1,2,3,4,5];
// const test = firstArray.shift();
// console.log(test)
// console.log(firstArray)

// ========================================================POP  удаляем один элемент с конца ИЗМЕНЯЯ ИСХОДНЫЙ МАССИВ
// const firstArray = [1,2,3,4,5];
// console.log(firstArray.pop())
// console.log(firstArray)


// ======================================================== UNSHIFT  ДОБАВЛЕТ ЕЛЕМЕНТ В НАЧАЛО МАССИВА

// const firstArray = [1,2,3,4,5];
// firstArray.unshift(99)
// console.log(firstArray)
// ==================================================================== SLICE КОПИРОВАНИЕ(от и до ) МАССИВА
// const test = testString.slice(-3);
// console.log(testString, 'testString')
// console.log(test, 'test')

// ==================================================================== CONCAT ОБЬЕДЕНЕНИЕ 2 МАССИВОВ
// const firstArray = [1,2,3,4,5];
// const secondArray = [10,11,12,13];
// const concatArray = secondArray.concat(firstArray);
// console.log(concatArray)
// console.log([...secondArray, ...firstArray])


// ==================================================================== ЦИКЛЕЦ FOR

//====================================================================  БАЗОВЫЙ ЦИКЛ FOR
// const strArr = ['1', '2', '3', '4', '5'];
// for (let i = 0; i < strArr.length; i++) {
//   strArr[i] = parseInt(strArr[i]);
//   // логика которая будет выполнятся на каждой итерации цикла пример: пока i = 0 ,
//   //   следующая итерация когда i = 1  и так далее по условию
// }
// ================================================================================== СОЗДАНИЕ ДВУМЕРНОГО МАССИВА 2-МЯ ЦИКЛАМИ FOR
// let testMoc = [];
//
// for (let i = 0; i < 10; i++) {
//   const testArray = [];
//
//   for (let j = 0; j < 10; j++) {
//     let el = i === j || j === 9 - i ? 'x' : 0;
//     testArray.push(el);
//   }
//
//   testMoc.push(testArray);
// }
// console.log(testMoc, 'testMoc')

// const test1 = ['123', 'test', 8, 'dildo', 'maramoyka', 'salo', 'rysna ymerla', '99'];
// ================================================================================== INDEX OF НАХОДИТ ИНДЕКС ЕЛЕМЕНТА В МАССИВЕ
// const elementIndex = array.indexOf(2);



// НАРИСОВАТЬ В КОНСОЛЕ ДАННУЮ МАТРИЦУ
// 0: (10) ['x', 'x', 'x', 'x', 'x' 'x', 'x', 'x', 'x', 'x']
// 1: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 2: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 3: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 4: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 5: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 6: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 7: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 8: (10) ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// 9: (10) ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

