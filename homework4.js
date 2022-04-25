// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
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
// alert(array('y', 7));
//
// 2) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//     Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[[4, 6], [2, 4]],[[5,6], [7,8]]];
// let arrStock = arr[0];
// function arrSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         for ( let j = 0; j < array[i].length; j++) {
//             sum += array[i][j];
//         }
//     }
//     console.log(sum);
// }
// arrSum(arrStock);


//
// 3) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange (num) {
//   return num > 0 && num < 10;
//
// }
//
// console.log(isNumberInRange(9));

//
// 4) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(number) {
//     return number %5 == 0;
//
// }
//
// console.log(isEven(2));


//
// 5) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
//
// let newArr = [];
// for ( let i = 0; i <= arr.length; i++) {
//     if (isEven(i)) {
//         newArr.push(i);
//     }
// }
//  function isEven(num) {
//   return num %2 == 0;
//  }
//
// console.log(newArr);

//
// 6) Сделайте функцию getDivisors, которая параметром принимает число и
// возвращает массив его делителей (чисел, на которое делится данное число).

//
// function  getDivisors (num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++) {
//         if (num % i == 0){
//             arr.push(i);
//         }
//
//     }
// return arr ;
// }
//
// console.log(getDivisors(112));


//
// 7) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function exponentiation(x, degree) {
//     let num = x;
//     for ( let i = 1; i < degree; i++) {
//         num = num*x;
//     }
// return num;
// }
//
// console.log(exponentiation(2,4));
// alert(exponentiation(+prompt('введите число'),+prompt('возведите в степень ')));


// 8) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.


//
// function security(age) {
//     if (age > 16) {
//         alert('Добро пожаловать');
//     } else  {
//         alert(' Вы еще молоды');
//     }
// }
// console.log(security(15));

//
// 9) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function  security(age) {
//     if (age > 16){
//         alert('Добро пожаловать');
//     } else if ( age === undefined) {
//         alert('Введите возраст');
//     }else  {
//         alert('Вы еще молоды');
//     }
//
// }
//
// console.log(security());

// function security(age) {
//     if (age > 16) {
//         alert('Добро пожаловать');
//     } else if( age = age || 'undefined') {
//         alert('Введите возраст');
//     } else {
//         alert('Вы еще молоды');
//     }
//
//
// }
// console.log(security());


//
// 10) Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
//     Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

//     function arrLength (arr) {
//     if (arr === undefined) {
//         console.log('Eror');
//     }
//     return arr.length;
//
//     }
//
// console.log(arrLength([1,2,3,4,5]));


//
// 11) Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
//     если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.

//   function numbers(num) {
//     if (num > 10) {
//         return num * num;
//     } else if (num < 7) {
//         console.log('число меньше 7');
//     } else {
//       return num;
//     }
//
//   }
//
// console.log(numbers(12));


// Реализуйте решение с несколькими return.
//
// 12) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let strZalupa = 'Как ты мальчик мой тильтуешь с проверки моего дз. я тоже тильтовла когда делал';
// let massive = [];
// let massiveSplit = strZalupa.split(' ');
// for ( let i = 0; i < massiveSplit.length; i++) {
//     massive.push (ucfirst(massiveSplit[i]));
// }
// function ucfirst(str) {
//     return str[0].toUpperCase()+ str.slice(1);
//
// }
// let newZalupa = massive.join(' ');
// console.log(newZalupa);


//
// 13) Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'. ( с помощью функции, которая принимает строку)

// let strKek = 'var_text_hello';
// let mass = [];
// let massSplit = strKek.split('_');
// for ( let i = 0; i < massSplit.length; i++) {
//     mass.push(newFunction(massSplit[i]));
// }
// function newFunction(str) {
//     return str [0].toUpperCase()+ str.slice(1);
//
// }
// let nihyiya = mass.join ('');
// console.log(nihyiya);


//
// 14) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.
//
// function inArray(text,arr) {
//     for ( let i = 0; i < arr.length; i++) {
//         if ( arr [i] === text ) {
//             return true
//         }
//
//     }
//    return false
// }
//
// console.log(inArray('jusi-pusi',['raznie', 'slova', 'kotorie', 'hochy']));

//
// 15) Дана строка, например, '123456'. Сделайте из нее '214365'.

// let nubmers = '123456';
//
// function reversNumbers(string) {
//     let mass = [];
//     let massiveSplit = string.split('');
//     for (let i = 0; i < massiveSplit.length; i += 2) {
//         let cheange = massiveSplit.slice(i, i + 2).reverse();
//          mass = mass.concat(cheange);
//     }
//     nubmers = mass.join('');
//     return nubmers;
// }
// console.log(reversNumbers(nubmers));


//
// 16) Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
//     которая при каждом вызове дает число на 1 больше, и так до бесконечности.
//     Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
//     Шаг можно не указывать, тогда он будет равен одному.
//     Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
//
// function sequence (start, step) {
//     return function () {
//         return start += step
//
//     }
//
// }
//    let generator = sequence(0, 1);
//
// console.log(generator());
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
// раз и возвращает массив с результатами вызовов. (первый аргумент ето наша функция генератор с 16 задачи, второй кол-во раз для вызова )

// function sequence (start, step) {
//     return function () {
//         return start += step
//
//     }
//
// }
// function take(gen, x) {
//     let arr = [];
//     for (let i = 0; i < x; i++) {
//         arr[i] = gen();
//     }
// return arr;
// }
//
// console.log(take(sequence(0,3),8));



//
// 18) Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//     и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

// function map (fn, array) {
//     let arr = [];
//     for ( let  i = 0; i < array.length; i++) {
//         arr.push(sum(array[i]));
//     }
// return arr;
// }
// function sum (x) {
//     return x + x;
// }
// console.log(map(sum,[1,2,3,4,5,6]));





//
// 19) Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
//     где gen — функция-генератор вроде той, что была в 17 задании.
//     fmap возвращает новую функцию-генератор,
//     которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.

// function sequence (start, step) {
//     return function () {
//         return start += step
//
//     }
//
// }
//    let gen = sequence(0, 1);
// function a (x) {
//     return x + x;
//
// }
// let sum = fmap (a , gen);
// function fmap (a, gen) {
//     return function () {
//     return a(gen());
//     }
//
// }
//
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());

