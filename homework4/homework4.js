// 1. Написать функцию которая выводит на ваше усмотрение ( определенные поля(пример name, surname) у принимаемых обьектов , с использованием this ( call, bind, apply))
// example:
//   showInfo(obj1)  // name: 'test', age: 22, surname: 'stassov'
//   showInfo(obj2)  // name: 'test2', age: 12, surname: 'bolov'
//
// function showInfo() {
//     return `name: ${this.name}, age: ${this.age}, surname: ${this.surname}`
//     }
//
// const test = {
//     name: 'Stas',
//     age: 25 ,
//     surname: 'Ganjubas'
// };
//
// console.log(showInfo.call(test));
// console.log(showInfo.apply(test));
//
// const info = {
//     name: 'Oleg',
//     surname: 'Kharkovskiy',
//     age: 65,
//     getInfo: function () { return `name: ${this.name}, age: ${this.age}, surname: ${this.surname}` }
// };
//
// let getInfo = info.getInfo;
// let testBind = getInfo.bind(info);
//
// console.log(testBind());

//2 Дан массив чисел размерностью 10 элементов. Написать функцию, которая  сортирует массив по возрастанию или по убыванию,
// в зависимости от третьего  параметра функции. Если он равен 1, сортировка идет по убыванию, если 0, то по
// возрастанию. Первые 2 параметра функции это массив и его размер, третий параметр  по умолчанию равен 1.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function sortArray(arr, size, sort = 1) {
//
//         for (let i = 0; i < arr.length; i++) {
//             arr.sort((a, b) => sort === 0 ? a - b: b - a)
//         }
//
//         return arr
//
// }
//
// console.log(sortArray(array, 10, 1));

//3 сколько различных чисел в заданном массиве
// example: const testArr = [1,1,2,3,4,4]
// result: 4
//
// const array = [1, 1, 2, 3, 4, 4, 5, 5];
//
// function findResult(arr) {
//     let result = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = i + 1; j < arr.length; i++) {
//
//             if (arr[i] === arr[j]) {
//                 result++;
//                 break;
//             }
//         }
//     }
//
//     return result
//
// }
//
// console.log(findResult(array));


//4 третий массив есть пересечение двух заданых (совпадения чисел в 1 и 2 массиве)
// example:
// const testArr1 = [1,32,2,3,4,4]
// const testArr2 = [99,12,32,4]
// result: [4,32]
//
// const arr1 = [1, 32, 2, 3, 4, 4];
// const arr2 = [99, 12, 32, 4];
//
// function finder(arr, test) {
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = 0; j < test.length; j++) {
//
//             if (arr[i] === test[j]) {
//                 result.push(arr[i])
//             }
//         }
//     }
//
//     return result
// }
//
// console.log(finder(arr1, arr2));


//5 обьеденить два упорядоченных(отсортированных) массива таким образом чтоб в результирующем массиве все эллементы были различны
// example:
// const testArr1 = [1,2,3,4]
// const testArr2 = [3,4,5,6]
// result: [1,2,3,4,5,6]
//
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
//
// function sort(arr1, arr2) {
//     let total = [...arr1, ...arr2];
//     const unique = new Set(total);
//     const result = [...unique];
//
//     return result
//
// }
//
// console.log(sort(a, b));


// 6 все ли эллементы массива различны ( Вернет true или false )
//
// const test = [1, 2, 3, 4, 5, 6, 7, 8];
//
// function check(arr) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return false;
//             }
//         }
//     } return true
// }
//
// console.log(check(test));


// 7 индекс последнего минимального значения ( вернет индекс ( минимального числа ))
//
// const test = [5, 4, 3, 2, 1];
//
// function finder(arr) {
//     let lowest = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i] < arr[lowest]) {
//             lowest = i
//         }
//     }
//
//     return lowest
//
// }
//
// console.log(finder(test));


// 8 Напишите функцию, которая для заданных двух массивов определяет, существуют ли одинаковые подряд идущие элементы.
// Массивы должны быть разной длины. Вернет true или false
//
// const test1 = [1, 2, 3, 4, 5, 6];
// const test2 = [1, 4, 21, 56, 3, 7, 8, 77];
//
// function finder(arr1, arr2) {
//     let isSame = false;
// const res = [...test1,  ...test2];
// for (let i=0; i< res.length; i++) {
//     if (res[i] === res[i+1]) {
//         isSame = true;
//     }
// }
//
// return isSame;
// }
//
// console.log(finder(test1, test2));

// 9 Создать класс Дом у которого есть окна и двери.
//
// class House {
//     constructor(door, window) {
//         this.door = door;
//         this.window = window;
//     }
//
//
// // 9.1 Написать setter-ы которые будут красить окна, красить двери и красить весь дом ( 3 сеттера)
//
//     set doorColor(newColor) {
//         this.door = newColor;
//     }
//
//     set windowColor(newColor) {
//         this.window = newColor;
//     }
//
//     set allColor(newColor) {
//         this.window = newColor;
//         this.door = newColor;
//     }
//
// // 9.2 Написать getter-ы которые будут возвращать цвет окон, цвет дверей и цвет всего дома.
//
//     get getDoor() {
//         return this.door;
//     }
//
//     get getWindow() {
//         return this.window;
//     }
//
//     get getAllHouse() {
//         const fullInfo = {
//             doorColor: this.door,
//             windowColor: this.window
//         };
//         return fullInfo
//     }
// }
//
//
// // 9.3 Создать Пентхаус который будет потомком класса ДОМ ( extend ) с новыми полями ( бассейн, гараж )
//
// class Penthouse extends House {
//     constructor(pool, garage, window, door) {
//         super(window, door);
//         this.pool = pool;
//         this.garage = garage
//     }
//
// // 9.4 Класс пентхаус должен иметь свой метод открыть/закрыть гараж
//
// garageDoor() {
//         if (this.garage === 'open') {
//             console.log('Гараж открыт')
//         } else if (this.garage === 'closed') {
//             console.log('Гараж закрыт')
//         } else if (this.garage === undefined) {
//             console.log('Введите данные (open/closed)')
//         } else {
//             console.log('Данные указаны неверно (open/closed)')
//         }
// }
// }
//
//













