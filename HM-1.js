'use strict'

/*//1. Вывести числа от 4 до 400 на экран.

let startNumber = 4;
const endNumber = 400;
function countOneToForHung() {
    while (startNumber <= endNumber) {
        console.log(startNumber)
        startNumber++;
    }
}
countOneToForHung();*/

// const endNumber = 400;
// for (let i = 4; i <= endNumber; i++){
//     console.log(i)
// }

/*2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

function someSequence() {       //sequence - последовательность
    let endNumber = 13;
    let startNumber = 4;
    for ( ; startNumber <= endNumber ; ) {
        console.log(startNumber);
        startNumber += 3;
    }
}
someSequence();*/

// const endNumber = 13;
// for (let i = 4; i <= endNumber; i += 3){
//     console.log(i)
// }

/*3. Вывести числа 654 653 652 до нуля

let startNumber = 654;
function someSequence() {      //sequence - последовательность
    while (startNumber >= 0) {
        console.log(startNumber)
        startNumber--;
    }
}
someSequence();*/
// const endNumber = 0;
// for (let i = 654; i >= endNumber; i--){
//     console.log(i)
// }

/*// 4. Вывести все годы с 1983 до 2017.

let firstYear = 1983;
const lastYear = 2017;
for (let i = firstYear; i <= lastYear; i++){
    console.log(i);
}*/

/*5. Вывести числа -4 -2 0 2 4 6 ...100.

let startNumber = -4;
const  endNumber = 100;

function evenNumers() {     ///even - четный
    while (startNumber <= endNumber){
        if (startNumber % 2 === 0){
            console.log(startNumber)
        }
        startNumber++;
    }
}
evenNumers();*/

// const endNumber = 100;
// for (let i = -4; i <= endNumber; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

/*//6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

function Multipl() {
    let seven = 7;
    for (let i = 0; i <= 10; i++) {
        let res = i * seven;
        console.log(`${i} * ${seven} = ${res}`)
    }
}
Multipl();*/

// let arrExSeven = [];
// for (let i = 1; i < 10; i+=6){
//     let helpArr = [];
//
//     for (let j = 0; j < 10; j++){
//         let one = i * j;
//         helpArr.push(one)
//     }
//     arrExSeven.push(helpArr)
// }
//
// console.log(arrExSeven)

/*7*. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)

const endNumber = 100;
let res = 0;
function sumNambers() {
    for (let i = 1; i <= endNumber;i++ ){
        res += i;
    }
    console.log(res);
}
sumNambers();*/

/*//8*. С помощью цикла вывести произведение чисел от 1 до 50. ( 0 умноженный на 1 ,
// ето число умноженное на 2, это число умноженное на 3 и т.д)

let endNumber = 50;
let res = 1;
for (let i = 1; i <= endNumber; i++){
    res = res * i;
}
console.log(res);*/

/*// //9*.  Заполните массив следующим образом: в первый элемент запишите 'x',
//  во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
    let arrX = [];
    const enterLenght = parseFloat(prompt(`Enter lenght`));
    for (let i = 1; i <= enterLenght ; ++i) {
        arrX.unshift(`x`)
        console.log(arrX);
    }*/

// let arrX = [];
// const  enterLength = parseFloat(prompt(`Enter length`));
// for (let i = 1; i <= enterLength; i++){
//     let x = '';
//     for (let j = 1; j <= i; j++){
//         x = x + 'x';
//     }
//     arrX.push(x);
// }
// console.log(arrX);

/*// 10*.  Заполните массив следующим образом: в первый элемент запишите '1',
//  во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

let arrNumers = [];
const enterLenght = prompt(`Enter lenght`);
for (let i = 1; i <= enterLenght; i++){
    let str = '';
    for (let j = 1; j<= i; j++) {
        str += i;
    }
    arrNumers.push(str)
    console.log(arrNumers);
}*/

/*// 11*. Дан массив с числами.
//  Узнайте сколько элементов с начала массива надо сложить
//  , чтобы в сумме получилось больше 10-ти.
//  let array = [1, 2, 3, 4, 5];

let arrCount = [];
let maxLenght = 15;
let res = 0;
let maxNumber = 10;
let sum = 1;
for (let i = 0; i<= maxLenght; i++){
    arrCount.push(Math.round(Math.random() * 10));
    sum += arrCount[i];
    res += i;
    console.log(`${arrCount} | ${sum} | `);
    if (sum > maxNumber){
        console.log(`нужно сложить ${res} чисел` );
        break;
    }
}*/

// let arrX = [1, 2, 3, 4, 5];
// let sum = 0;
// let count = 0;
// function NumberCount(arr) {
//
//     for (let i = 0; i <= arrX.length; i++){
//         sum = arrX[i] + sum;
//         count++;
//         if (sum > 10){
//             break;
//         }
//     }
// }
// NumberCount(arrX);
// console.log(count);

/*// 12*. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
let arrNumbers = [1, 2, 3, 4, 5, 6];
let sortArr = [];

for (let i = 0; i <= arrNumbers.length; i++){
    let deleitElem = arrNumbers.splice(0, 2);
    let firstElem = deleitElem.shift()
    let secondElem = deleitElem.pop();
    sortArr.push(secondElem);
    sortArr.push(firstElem);
}
console.log(sortArr);*/

/*//13*. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]

let arrNumbers = [1, 2, 3, 4, 5, 6];
let arrSort = [];
arrNumbers.reverse();
console.log(arrNumbers)
for (let i = 0; i <= arrNumbers.length; i++){
    let deliteElem = arrNumbers.splice(0, 2);
    let firstElemen = deliteElem.shift();
    let secondElem = deliteElem.pop();
    arrSort.push(secondElem);
    arrSort.push(firstElemen);
}
console.log(arrSort);*/



/*//16*. нарисовать матрицу (таблица умножения)
let arrExSeven = [];

for (let i = 1; i <= 10; i++){
    let helpArr = [];

    for (let j = 1; j <= 10; j++){
        let one = i*j;
            helpArr.push(one);
    }
    arrExSeven.push(helpArr)
}

console.log(arrExSeven)*/


