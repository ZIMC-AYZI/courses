'use strict'

/*//Написать функцию которая первым принимает значение,
// которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function fillArr(symOrNum, numOfNum) {
        let arr = [];
        for (let i = 1; i <= numOfNum; i++){
            arr.push(symOrNum);
        }
        return arr;
}

console.log(fillArr('x', 5));*/

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// function arrItemsSum(arr) {
//     let multiArr = 3;
//     let startCounNum = 0;
//     let res = arr.flat(multiArr)
//                  .reduce((sum, item) => sum + item, startCounNum);
//     console.log(res);
// }
// ArrItemsSum([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]);

// function arrItemsSum(arr){
//     let res = 0;
//     for (let i = 0; i <= arr.length; i++){
//         for (let j = 0; j <= arr[i].length; j++){
//             for (let a = 0; a < = arr[i][j].length; a++){
//                 res += arr[i][j][a];
//             }
//         }
//     }
//     return res;
// }

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num) {
//     return  num > 0 && num < 10}
// console.log(isNumberInRange(11));

/*//Сделайте функцию isEven() (even - это четный),
// которая параметром принимает целое число и проверяет:
// четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

const isEven = (num) => num % 2 === 0
console.log(isEven());

//Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];
//let evenArr = arr.filter(elem => isEven(elem))
for (let i = 0; i <= arr.length; i++){
    if (isEven(arr[i])){
        evenArr.push(arr[i])
    }
}
console.log(evenArr)*/


/*//Сделайте функцию getDivisors, которая параметром принимает число
// и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(num) {

    let arr = [];
    for (let i = 1; i <= num; i++){
         if(num % i === 0){
             arr.push(i)
         }
     }
    return arr;
}

console.log(getDivisors(20));*/

/*//7) Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень
// и выведите с помощью console.log.

function exponen(num, expon) {console.log(num ** expon)}
exponen(10, 3)*/
//const exponen1 = (num, expon) => console.log(num ** expon)


/*//8) Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать»,
// если меньше – “вы еще молоды”.

function agePass(age) {
    const currentAge = 16;
    return age > currentAge ? (`добро пожаловать`) : `вы еще молоды`

}

console.log(agePass(2))*/

/*//9) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал
// параметр в функцию.таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined

function agePass(age) {
    const currentAge = 16;
    // if (age === undefined) {
    //     alert(`enter your age by numbers`)
    // }else if (age > currentAge) {
    //     return console.log(`добро пожаловать`)
    // }else return console.log(`вы еще молоды`)
    return age !== undefined ? age > currentAge ? `добро пожаловать`: `вы еще молоды`: 'Введите возраст';
}
//-------------------------нет варианта с ||
// ---------------- спросил про єту проверку в групе, сказали что єто опечатка
let a = 'asd'
let b;
let v = 17;
let c = 15;
console.log(agePass(b));*/

/*//10) Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
//Массив в функцию передается как аргумент.
// Если аргумент не задан – выводится сообщение об ошибке.

function arrLength(arr) {

    return arr !== undefined ? parseInt(arr.length) : " Error";
}
console.log(arrLength());*/

/*//11) Пользователь вводит числа.
// Если число больше 10, то функция возвращает квадрат числа,
// если меньше 7 – пишет, что число меньше 7. 
// Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.

let enterNum = parseInt(prompt(`Enter number`))
function sortingSomeNumbers(num) {

    if (num < 7) {
        return console.log(`your number less than 7`)
    } else if (num === 8 || num === 9) {
       return  num - 1;
    } else if (num > 10){
        return (num ** 2)}
}
console.log(sortingSomeNumbers(enterNum))*/

/*//12) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst,
// которая будет получать строку,делать первый символ этой строки
// заглавным и возвращать обратно строку с заглавной первой буквой.

function usFirst(stri) {
    if (!stri) return stri;

    return stri[0].toUpperCase() + stri.slice(1)

}

console.log(usFirst('pety'))
let someArr = prompt(`enter you sentence`)
function toUpperEveryWord(str) {
    let arr = [];
    str =  str.split(' ');

    for (let i = 0; i <= str.length; i++){

        arr.push(usFirst(str[i]));
    }
    arr = arr.join(' ');
    return arr;
}

console.log(toUpperEveryWord(someArr));*/

/*//13) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// ( с помощью функции, которая принимает строку)

let str = 'var_text_hello';

function usFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)

}

function someSort(str) {
    let arr = [];
    str = str.split('_');
    console.log(str);
    for (let i = 0; i <= str.length; i++){
        if (i === 0){
            arr.push(str[i])
        }else {
            arr.push(usFirst(str[i]))
        }
    }

    str = arr.join('')
    return str;
}
console.log(someSort(str))*/

/*// 14) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.

function inArray(txtElem, arr) {
    let text = txtElem;
    console.log(arr[arr.length - 1])
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i].includes(text)) {
            return true
        } else if (!arr[arr.length - 1].includes(txtElem)) {
            return false
        }

    }
}
console.log(inArray(123, ['asd ', '2133 ada', 'qweqsd', 'qweqe']));*/

/*
//15) Дана строка, например, '123456'. Сделайте из нее '214365'.

function sortArr(strOfNumbers) {
    strOfNumbers = strOfNumbers.split('')
    for (let i = 0; i <= strOfNumbers.length; i++){
        if (strOfNumbers[i] % 2 === 0) {
            [strOfNumbers[i - 1], strOfNumbers[i]] = [strOfNumbers[i], strOfNumbers[i - 1]]}
    }
    strOfNumbers = strOfNumbers.join('')
    return strOfNumbers;
}

console.log(sortArr('123456'))*/

// 16) Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
// которая при каждом вызове дает число на 1 больше, и так до бесконечности.
// Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
// Шаг можно не указывать, тогда он будет равен одному.
// Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

