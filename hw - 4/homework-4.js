'use strict';

/*
// 1. Написать функцию которая выводит на ваше усмотрение
// ( определенные поля(пример name, surname) у принимаемых обьектов ,
// с использованием this ( call, bind, apply))
// example:
//   showInfo(obj1)  // name: 'test', age: 22, surname: 'stassov'
//   showInfo(obj2)  // name: 'test2', age: 12, surname: 'bolov'

let obj1 = {
    name: 'test',
    surname: `stasov`,
    age: 22,
    objData(){
        return `name: ${this.name}, age: ${this.age}, surname: ${this.surname}`
    }
};

let obj2 = {
    name: 'test2',
    surname: `bolov`,
    age: 12,
};

console.log(obj1.objData.call(obj2), `вызов через Call`);
console.log(obj1.objData.apply(obj2), `вызов через Apply`);

const bindCall = obj1.objData.bind(obj2);
console.log(bindCall(), `вызов через Bind`);
*/


/*
//2 Дан массив чисел размерностью 10 элементов. Написать функцию, которая  сортирует массив по возрастанию или по убыванию,
// в зависимости от третьего  параметра функции. Если он равен 1, сортировка идет по убыванию, если 0, то по
// возрастанию. Первые 2 параметра функции это массив и его размер, третий параметр  по умолчанию равен 1.

function sortingArr(arr, arrSize, increaseOrDescending = 1) {
    arr.splice(arrSize,);
    switch (increaseOrDescending) {
        case 0 :
            for (let i = 0; i <= arrSize; i++) {
                for (let j = 0; j <= arr.length; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                    }
                }
            }
            break;
        case 1 :
            for (let i = 0; i <= arrSize; i++) {
                for (let j = 0; j <= arr.length; j++) {
                    if (arr[j] < arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                    }
                }
            }
            break;
        default : `eban`
    }
    return arr;
}
*/
// function sortingArr(arr, arrSize, increaseOrDescending = 1) {
//     arr.splice(arrSize,);
//     for (let i = 0; i <= arrSize; i++) {
//         for (let j = 0; j <= arr.length; j++) {
//
//           if( increaseOrDescending === 1 ? arr[j] < arr[j + 1] : arr[j] > arr[j + 1]) {
//               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//           }
//         }
//     }
//     return arr;
// }
//
// console.log(sortingArr([4, 26, -2, 3, -289, 1], 6, 0));

/*//3 сколько различных чисел в заданном массиве
// example: const testArr = [1,1,2,3,4,4]
// result: 4
const testArr = [1,1,2,3,4,4];

function sortArr(arr) {
    let count = 0;
     for (let i = 0; i <= arr.length; i++) {
         if(i === arr.indexOf(arr[i]) ){
             count++
         }
     }
    return count;
}*/
// const testArr = [1,-1,2,3,44,4,2,1,1,1,1,44,44,55,55]
// console.log(testArr)
// function sortArr(arr) {
//     let count = 0;
//      for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//             if (arr[j] === arr[j + 1]){
//                 arr.splice(j,1)
//             }
//         }
//     }
//     return arr.length;
// }
// console.log(sortArr(testArr))

/*//4 третий массив есть пересечение двух заданых (совпадения чисел в 1 и 2 массиве)
// example:
// const testArr1 = [1,32,2,3,4,4]
// const testArr2 = [99,12,32,4]
// result: [4,32]

function returnOwnOfTwo(firstArr, secondArr) {
    let comlitArr = [];
    for (let i = 0; i < firstArr.length; i++)
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j] )
                comlitArr.push(secondArr[j]);
        }
    return comlitArr;
}*/

/*// 5 обьеденить два упорядоченных(отсортированных) массива таким образом
// чтоб в результирующем массиве все эллементы были различны
//example:
 const testArr1 = [1,2,3,4]
 const testArr2 = [3,4,5,6]
// result: [1,2,3,4,5,6]

function sortingArr(firstArr, secondArr) {
    firstArr = [...firstArr,...secondArr];
    let res = [];
    for (let i = 0; i < firstArr.length; i++){
        
        if (firstArr.indexOf(firstArr[i]) === i){
            res.push(firstArr[i])
        }
    }
    return res;
}

console.log(sortingArr(testArr1, testArr2));*/

// function sortingArr(firstArr, secondArr) {

//     for (let i = 0; i < firstArr.length; i++) {
//
//         for (let j = 0; j < secondArr.length; j++) {
//             if (firstArr[i] === (secondArr[j])) {
//                 secondArr.splice(j,1)
//                 break
//             }
//         }
//     }
//     firstArr = [...firstArr, ...secondArr];
//     return firstArr;
// }

// /*// 6 все ли эллементы массива различны ( Вернет true или false )
// function defOrSameArr(arr) {
//         for (let i = 0; i <= arr.length; i++){
//             if (i === arr.indexOf(arr[i])){
//                 return false;
//             }
//         }
//         return true;
// }*/
//
// function defOrSameArr(arr) {
//     for (let i = 0; i <= arr.length; i++){
//         for (let j = i + 1; j <= arr.length; j++){
//             if (arr[i] === arr[j]){
//                 return false;
//             }
//         }
//     }
//     return true;


/*// 7 индекс последнего минимального значения ( вернет индекс ( минимального числа ))
function lastMinIndex(arr) {
       let min = 0;
       for (let i = 0; i <= arr.length; i++){
           if (arr[i] <= arr[min]){
               min = i;
           }
       }
       return min;
}*/

/*// 8 Напишите функцию, которая для заданных двух массивов определяет,
// существуют ли одинаковые подряд идущие элементы.
// Массивы должны быть разной длины. Вернет true или false

function camperArrSameElement(firstArr, secondArr) {
    firstArr = [...firstArr,...secondArr];
    console.log(firstArr)
    for (let i = 0; i <= firstArr.length; i++){
        if (firstArr[i] === firstArr[i - 1]){
            return true;
        }
    }
    return false;
}*/


/*
// 9 Создать класс Дом у которого есть окна и двери.
// 9.1 Написать setter-ы которые будут красить окна,
// красить двери и красить весь дом ( 3 сеттера)
// 9.2 Написать getter-ы которые будут возвращать цвет окон,
// цвет дверей и цвет всего дома.
// 9.3 Создать Пентхаус который будет
// потомком класса ДОМ ( extend ) с новыми полями ( бассейн, гараж )
// 9.4 Класс пентхаус должен иметь свой метод открыть/закрыть гараж

class Home {
    constructor(door, window, room,kitchen) {
        this.door = door;
        this.window = window;
        this.room = room;
        this.kitchen = kitchen;
    }

    set changeWindowColor(newWindowColor){
        this.window = newWindowColor;
    }

    set changeDoorColor(newDoorColor){
        this.door = newDoorColor;
    }

    set changeDoorsAndWindowsColors(newDoorsAndWindowsColors){

        this.window = newDoorsAndWindowsColors;
        this.door = newDoorsAndWindowsColors;
        this.room = newDoorsAndWindowsColors;
        this.kitchen = newDoorsAndWindowsColors;


    }

    get returnWindowColor(){
        const colorWindowsInfo = {
            window: `livingRoomWindow color is ${this.window}`,
        };
        return colorWindowsInfo;
    }

    get returnDoorColor(){
        const colorDoorInfo = {
            door: `toiletDoor color is ${this.door}`,
        };
        return colorDoorInfo;
    }

    get doorsAndWindowsColors(){
        const doorsAndWindowsInfo = {
            window: `livingRoomWindow color is ${this.window}`,
            door: `kitchenWindow color is ${this.door}`,
            room: `badRoomWindow color is ${this.room}`,
            kitchen: `toiletDoor color is ${this.kitchen}`,
        };
        return doorsAndWindowsInfo;
    }
}

class Penthouse extends Home {
    constructor(swimmingPool, garage = true, door, window, room,kitchen) {
        super(door, window, room,kitchen)
        this.swimmingPool = swimmingPool;
        this.garage = garage;
    }

    OpenCloseGarage(){

        if (this.garage = true){
            return `Garage is open`
        }else {
            `Garage closed`
        }
    }
}
*/




