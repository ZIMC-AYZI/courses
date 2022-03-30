// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//  а вторым - сколько элементов должно быть в массиве.
//  Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
//
// function arrayFill(x, number) {
//     let array = [];
//     let str = '';
//
//     for(let i = 0; i < number; i++) {
//         str += x;
//         array.push(x)
//     }
//     console.log(array)
// }
//
// arrayFill('stas', 2);


// 2) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//  Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//
// let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
//
// function arrayMath(arr) {
//     let sum = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = 0; j < arr[i].length; j++) {
//
//             for (let y = 0; y < arr[i][j].length; y++) {
//                 sum += arr[i][j][y];
//             }
//         }
//     }
//     console.log(sum)
// }
//
// arrayMath(array);


// 3) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
//
// function isNumberInRange(number) {
//     if (number > 0 && number < 10) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
//
// isNumberInRange(7);


// 4) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
//
// function isEven(number) {
//     if (number % 2 === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
//
// isEven(6);


// 5) Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
//
// let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArray = [];
//
// function check(arr) {
//
//     for (let i = 1; i < arr.length; i ++) {
//         if (i % 2 === 0) {
//             newArray.push(i)
//         } else {
//
//         }
//     }
//     console.log(newArray)
// }
//
// check(testArray);


// 6) Сделайте функцию getDivisors, которая параметром принимает число и
// возвращает массив его делителей (чисел, на которое делится данное число).
//
// function getDivisors(number) {
//     let array = [];
//
//     for (let i = number; i < 100; i++) {
//         if (i % number === 0) {
//             array.push(i)
//         } else {
//
//         }
//     }
//     console.log(array)
// }
//
// getDivisors(17);


// 7) Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
//
// function work(number, degree) {
//     console.log(number ** degree)
// }
//
// work(3,3);


// 8) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
//
// function checkAge(age) {
//     if (age > 16) {
//         console.log('Добро пожаловать')
//     } else {
//         console.log('Вы еще молоды')
//     }
// }
//
// checkAge(10);


// 9) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//  В таком случае выведите сообщение – “Введите возраст”.
//   Реализуйте два вида проверки наличия аргумента – проверка на undefined.
//
// function checkAge(age) {
//     if (age > 16) {
//         console.log('Добро пожаловать')
//     } else  if (age === undefined) {
//         console.log('Введите возраст')
//     } else {
//         console.log('Вы еще молоды')
//     }
// }
//
// checkAge();


// 10) Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
// Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
//
// let array = [1, 2, 3, 4, 5, 6, 7];
//
// function arraySum(arr) {
//     let number = 0;
//
//     for (let item of arr) {
//         number = +item
//     }
//
//     if (arr === undefined) {
//         console.log('Ошибка')
//     } else {
//         console.log(number)
//     }
// }
//
// arraySum(array);


// 11) Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
// если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.
//
// function check(number) {
//
//     if (number > 10) {
//         return console.log(number ** 2)
//     } else if (number < 7) {
//         return console.log('Число меньше 7')
//     } else {
//         return console.log(number)
//     }
//
// }
//
// check(8);


// 12) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
//
// function ucfirst(string) {
//     if (!string) return console.log('Введите данные');
//
//     return console.log(string[0].toUpperCase() + string.slice(1));
//
// }
//
// ucfirst('стасик');


// 13) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
//
// function ucfirst(str) {
//     return str[0].toUpperCase() + str.substr(1)
// }
//
// let str = 'var_text_hello';
// let arr = str.split('_');
//
// for (let i = 1; i < arr.length; i++) {
//     arr[i] = ucfirst(arr[i]);
// }
//
// str = arr.join('');
//
// console.log(str);

// 14) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив,
// в котором делается поиск. Функция должна возвращать true или false.
//
// function inArray(text, arr) {
//
//     for (let el of arr) {
//         if (el.match(text)) {
//             return true
//         }
//     }
//     return false
// }
//
// let text = 'dick';
// let arr = [1, 3, 'Hello my name is dick', 5];
//
// console.log(inArray(text, arr));