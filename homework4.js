// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве. (done)
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function  array(element, number) {
//     let arr = [];
//     for (let i = 0; i < number; i++){
//         arr.push(element);
//
//     }
//     return arr;
//
// }
// alert(array(' y', 7));

//
// 2) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//     Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. (done)

// let arr = [[[2, 3, 3], [3, 7, 1], [5, 5], [6]]];
// let arrStock = arr[0];
// function arrSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//                 sum += array[i][j];
//         }
//
//     }
//     console.log(sum);
//
// }
//
// arrSum(arrStock);


//
// 3) Сделайте функцию , которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. (done)

// function numberCheck (num) {
//   return num > 0 && num < 10;
//
// }
//
// console.log(numberCheck(12));


//
// 4) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. (done)


// function isEven (num) {
//   return num % 2 == 0 ;
//
// }
//
// console.log(isEven(11));
//

//
// 5) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. (done)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let newArr = [];
//
// for (let i = 0; i <= arr.length; i++) {
//     if (isEven(i)) {
//
//         newArr.push(i);
//     }
// }
// function isEven(num) {
//     return num % 2 == 0;
// }
// console.log(newArr);

//
// 6) Сделайте функцию getDivisors, которая параметром принимает число и
// возвращает массив его делителей (чисел, на которое делится данное число). (done)


// function getDivisors (num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//   return arr ;
//
// }
// console.log(getDivisors(112));


//
// 7) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.


// function exponentiation(x, degree) {
//     let num = x;
//     for (let i = 1; i < degree; i++) {
//         num = num*x;
//     }
//     return num;
// }
// console.log(exponentiation(2,4));
// alert(exponentiation(+prompt('введите число:'),+prompt('введите степень:')));


//
// 8) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”. (done)
//
//
// function security(num) {
//     if (num > 16) {
//         alert('Добро пожаловать');
//     } else  {
//         alert('Вы еще молоды');
//     }
//
//
// }
// console.log(security(18));
// 9) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
//


// function security(num) {
//     if (num > 16) {
//         alert('Добро пожаловать');
//     } else if( num === undefined ) {
//         alert('Введите возраст');
//     } else {
//         alert('Вы еще молоды');
//     }
//
//
// }
// console.log(security());


// function security(num) {
//     if (num > 16) {
//         alert('Добро пожаловать');
//     } else if( num = num || 'undefined') {
//         alert('Введите возраст');
//     } else {
//         alert('Вы еще молоды');
//     }
//
//
// }
// console.log(security());


// 10) Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
//     Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке. (done)
//


// function arrLength(arr) {
//
//     if (arr === undefined) {
//         alert('Массив не задан');
//     }
//     return arr.length;
//
// }
//
// console.log(arrLength([2, 12, 4, 1, 51, 51, 51,]));


// 11)Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
// если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return. (done)


// function number(num) {
//     if (num > 10) {
//         return num*num;
//     } else if( num < 7) {
//         alert('Чисто меньше 7');
//     } else {
//         return num;
//     }
//
//
// }
// console.log(number(9));


//
// 12) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. done)

// let message = 'не ну это крынжовник какой-то';
// let arr = [];
// let arrSplit = message.split(' ');
// for (let i = 0; i < arrSplit.length; i++) {
//     arr.push(ucfirst(arrSplit[i]));
//
// }
// function ucfirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//
// }
// let newStr = arr.join(' ');
// console.log(newStr);


//
// 13) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку) (done)
//

// let text = 'var_text_hello';
// let arr = [];
// let arrSplit = text.split('_');
// for (let i = 0; i < arrSplit.length; i++) {
//     arr.push(allIn(arrSplit[i]));
//
// }
// function allIn(str) {
//    return str[0].toUpperCase() + str.slice(1);
// }
// let newStr = arr.join('');
// console.log(newStr);


// 14) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.
//


// function inArray(text, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === text) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(inArray('zalupa', ['I', 'love', 'beer', 'bitch']));


// 15) Дана строка, например, '123456'. Сделайте из нее '214365'. (done)

// let numbers = '123456';
//
// function reverseNumbers(str) {
//     let arr = str.split('');
//     let newArr = [];
//
//     for (let i = 0; i < arr.length; i += 2) {
//         let change = arr.slice(i, i + 2).reverse();
//         newArr = newArr.concat(change);
//     }
//
//     numbers = newArr.join('');
//     return numbers;
// }
//
// console.log(reverseNumbers(numbers));


// 16) Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
//     которая при каждом вызове дает число на 1 больше, и так до бесконечности.
//     Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
//     Шаг можно не указывать, тогда он будет равен одному.
//     Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно. (done)

// function sequence(start, step) {
// return function() {
//     return start += step;
// }
// }
//
// let generator = sequence(0, 1);
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
//
// 17) Также, нужна функция take(gen, x)
// которая вызывает функцию gen заданное число (x)
// раз и возвращает массив с результатами вызовов. (первый аргумент ето наша функция генератор с 16 задачи, второй кол-во раз для вызова ) (done)
// function sequence(start, step) {
// return function() {
//     return start += step;
// }
// }
// function take(sequence, x) {
//     let arr = [];
//     for (let i = 0; i < x; i++) {
//         arr[i] = sequence();
//     }
//     return arr;
//
//
// }
// console.log(take(sequence(0,2), 8));


//
// 18) Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//     и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. (done)

// function map(fn,arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(sum(arr[i]));
//     }
//     return newArr;
// }
// function sum(x) {
//     return x + x;
// }
// console.log(map(sum,[1,2,3,4]));


//
// 19) Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
//     где gen — функция-генератор вроде той, что была в 17 задании.
//     fmap возвращает новую функцию-генератор,
//     которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.

function* sequence(start = 0, step = 1) {
    while (true)
        yield start += step
}
const gen = sequence(0, 1);
function a(x) {
    return x + x;
}
let sum = fmap(a, gen);

function fmap(a, gen) {
    return function* g() {
        yield a(gen.next().value)
    }
}

console.log(sum().next().value);
console.log(sum().next().value);
console.log(sum().next().value);
console.log(sum().next().value);