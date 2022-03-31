// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//  а вторым - сколько элементов должно быть в массиве.
//  Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
//
// function arrayFill(x, number) {
//     let array = [];
//
//     for(let i = 0; i < number; i++) {
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
//     return number % 2 === 0
// }
//
// console.log(isEven());


// 5) Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
//
// let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArray = [];
// function check(arr) {
//
//     for (let i = 1; i < arr.length; i ++) {
//         if (isEven(arr[i])) {
//             newArray.push(arr[i])
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
//     if (arr === undefined) {
//         console.log('Ошибка');
//         return
//     }
//
//     for (let item of arr) {
//         number = +item
//     }
//
//     return number
//
// }
//
// console.log(arraySum(array));

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
// function ucfirst(str) {
//     return str[0].toUpperCase() + str.substr(1)
// }
//
// let str = 'привет я стас';
// let arr = str.split(' ');
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = ucfirst(arr[i]);
// }
//
// str = arr.join(' ');
//
// console.log(str);


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
//     const reg = new RegExp(text);
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
// let arr = ['asd', 'array', 'Hello my name is dick', 'cancel'];
//
// console.log(inArray(text, arr));


// 15) Дана строка, например, '123456'. Сделайте из нее '214365'.
//
// let text = '123456';
// let splitted = text.split('');
//
// function sort(arr) {
//     let arr2 = [];
//
//     for (let i = 0; i < arr.length; i += 2) {
//         arr2.push(arr[i + 1], arr[i])
//     }
//     return arr2
// }
//
// let ready = sort(splitted).join('');
//
// console.log(ready);


// 16) Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
//  которая при каждом вызове дает число на 1 больше, и так до бесконечности.
//  Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
// Шаг можно не указывать, тогда он будет равен одному.
//  Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
//
// function sequence(start = 0, step = 1) {
//     start -= step;
//
//     return function generator() {
//         return start += step;
//     }
// }
//
// let work = sequence(5,5);
// console.log(work());
// console.log(work());
// console.log(work());


// 17) Также, нужна функция take(gen, x)
// которая вызывает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
// (первый аргумент ето наша функция генератор с 16 задачи, второй кол-во раз для вызова )
//
// function take(gen, x) {
//     let work = gen;
//     let arr = [];
//
//     for (let i = 0; i < x; i++) {
//         arr.push(work())
//     }
//
//     return arr
// }
//
// console.log(take(sequence(2,5), 5));


// 18) Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//  и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
//
// function map(fn, array) {
//     let ready = [];
//
//     for (let i = 0; i < array.length; i++) {
//         ready.push(numplus(array[i]))
//     }
//
//     return ready
//
// }
//
// function numplus(x) {
//     return x * x
// }
//
// console.log(map(numplus(), [2, 3, 5]));


// 19) Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
//  где gen — функция-генератор вроде той, что была в 17 задании.
// fmap возвращает новую функцию-генератор,
// которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.
//
// function gen() {
//     let number = 0;
//
//     return function () {
//         return ++number;
//     }
// }
//
// function plus(num) {
//     return num + num;
// }
//
// function fmap(a, gen) {
//     const gen1 = gen();
//
//     return function () {
//         return a(gen1());
//     }
// }
//
// const fmap1 = fmap(plus, gen);
//
// console.log(fmap1());
// console.log(fmap1());
// console.log(fmap1());
// console.log(fmap1());
