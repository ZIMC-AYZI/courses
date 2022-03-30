'use strict'
console.log('i white new exercises')

//Написать функцию которая первым принимает значение,
// которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

/*function fillArr(symOrNum, numOfNum) {
    let arr = [];
    let numCount = 3;
    symOrNum = prompt(`Which symbol or number
                                do you want to fill?`);
    numOfNum = parseFloat(prompt(`How match symbol or number
                                do you want to fill?`));
    while (numCount > 0){

        if (numOfNum !== isNaN(Number)){
            alert(`it not a number`)
            numOfNum = parseFloat(prompt(`Enter number, yuo can try ${numCount} more time`))
            numCount--;
        }
        for (let i = 0; i <= numOfNum; i++){
            arr.push(symOrNum);
        }
    }
    return alert(arr)
}

fillArr();*/

/*//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

function ArrItemsSum(arr) {
    let multiArr = 3;
    let startCounNum = 0;
    let res = arr.flat(multiArr)
                 .reduce((sum, item) => sum + item, startCounNum);
    console.log(res);
}
ArrItemsSum([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]);*/

/*//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(num) {
    num = parseFloat(prompt(`Enter number`))
    if (num > 0 && num < 10){
        return true;
    }else {
        return false;
    }
}

console.log(isNumberInRange());*/

/*
//Сделайте функцию isEven() (even - это четный),
// которая параметром принимает целое число и проверяет:
// четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

const isEven = (num) => num % 2 === 0
console.log(isEven());

//Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter(elem => isEven(elem))
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
    return console.log(arr);
}

console.log(getDivisors(20));*/

/*//7) Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень
// и выведите с помощью console.log.

function exponen(num, expon) {console.log(num ** expon)}
exponen(10, 3)*/

/*
//8) Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать»,
// если меньше – “вы еще молоды”.

function agePass(age) {
    const currentAge = 16;
    if (age > currentAge) return console.log(`добро пожаловать`)
    else return console.log(`вы еще молоды`)
}

console.log(agePass(+prompt()))*/

/*//9) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал
// параметр в функцию.таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined
// и оператор ||.

function agePass(age) {
    //age = prompt(`Enter your age`)

    const currentAge = 16;
    if (age === undefined) {
        alert(`enter your age by numbers`)
    }else if (age > currentAge) {
        return console.log(`добро пожаловать`)
    }else return console.log(`вы еще молоды`)

}
let a = 'asd'
let b;
let v = 17;
let c = 15;
agePass(c)*/

/*
//10) Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
//Массив в функцию передается как аргумент.
// Если аргумент не задан – выводится сообщение об ошибке.

function arrLength(arr) {
    let res = -1;
    if (arr !== undefined)
    {for (let index in arr){
        res++
    }
        return res ;}
    else {
        console.log(`Error`)}
}
console.log(arrLength());*/

/*//11) Пользователь вводит числа.
// Если число больше 10, то функция возвращает квадрат числа,
// если меньше 7 – пишет, что число меньше 7. 
// Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.

function sortingSomeNumbers(num) {
    num = parseInt(prompt(`Enter number`))
    if (num < 7) {
        return console.log(`your number less than 7`)
    } else if (num === 8) {
       return  7
    } else if (num === 9) {
       return  8
    } else if (num > 10){
        return (num ** 2)}

}
console.log(sortingSomeNumbers())*/

/*
//12) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst,
// которая будет получать строку,делать первый символ этой строки
// заглавным и возвращать обратно строку с заглавной первой буквой.

function usFirst(str) {
    //console.log(typeof str);
    let res = str[0].toUpperCase() + str.slice(1)
    return res;
}

let someArr = prompt(`enter you sentence`)
function toUpperEveryWord(str) {
    let arr = [];
    str =  str.split(' ');

    str.forEach(function (item) {
        arr.push(usFirst(item));

    })
    return arr.join();
}
console.log(toUpperEveryWord(someArr))*/

/*
//13) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// ( с помощью функции, которая принимает строку)

let str = 'var_text_hello';

function usFirst(str) {
    let res = str[0].toUpperCase() + str.slice(1)
    return res;
}

function someSort(str) {
    let arr = [];
    str = str.split('_');
    console.log(str)
    str.forEach(function (item, index) {
        if (index === 0){
            arr.push(item)
        }else {
            arr.push(usFirst(item))
        }
    })
    str = arr.join('')
    return str;
}
console.log(someSort(str))*/

/*
// 14) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.

function inArray(txtElem, arr) {
    let a = txtElem;
    let b = arr;
    for (let i = 0; i <= b.length; i++){
        if (b[i].includes(a)){
            return true
        }else { return false}
    }
}

console.log(inArray('sumic',['123 suqeqmiqceqessumic', 1, {2: 'sumic'}, '   sqeqeueeqemiqweca' ]))*/
