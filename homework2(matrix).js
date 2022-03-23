// 1. Вывести числа от 4 до 400 на экран.
//
// let numbers = [];
//
// for (let i = 4; i <= 400; i++) {
//     numbers.push(i);
//
// }
//
// console.log(numbers);



// 2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
//
// for (let i = 1; i < 50; i += 3) {
//     console.log(i);
// }



// 3. Вывести числа 654 653 652 до нуля.
//
// let numbers = [];
//
// for (let i = 654; i !== 0; i--) {
//     numbers.push(i);
// }
//
// console.log(numbers);



// 4. Вывести все годы с 1983 до 2017.
//
// let years = [];
//
// for (let i = 1983; i <= 2017; i++) {
//     years.push(i);
// }
//
// console.log(years);



// 5. Вывести числа -4 -2 0 2 4 6 ...100.
//
// for (let i = - 4; i <= 100; i += 2) {
//     console.log(i);
// }



// 6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
//
// let seven = [];
// let vertical = [];
// let horizontal = [];
//
// for (let i = 1; i <= 10; i++) {
//     vertical.push(i);
//     horizontal.push(i * 7);
// }
//
// seven.push(vertical,horizontal);
//
// console.log(seven);



// 7*. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)
//
// function math(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum;
// }
//
// console.log(math(100));



// 8*. С помощью цикла вывести произведение чисел от 1 до 50. ( 0 умноженный на 1 ,
//  ето число умноженное на 2, это число умноженное на 3 и т.д)
//
// let numbers = 1;
//
// for (let i = 1; i <=50; i++) {
//     numbers = numbers * i
// }
//
// console.log(numbers);



// 9*.  Заполните массив следующим образом: в первый элемент запишите 'x',
//  во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
//
// let newArray = [];
// let newX = +prompt('Введите число');
// let str = '';
//
// for (let i = 0; i < newX; i++) {
//     str += 'x';
//     newArray.push(str);
// }
//
// console.log(newArray);
//



// 10*.  Заполните массив следующим образом: в первый элемент запишите '1',
//  во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.
//
// let newArray = [];
// let newX = prompt('Введите число');
//
// for (let i = 1; i <= newX; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += i
//     }
//
//     newArray.push(str);
// }
//
// console.log(newArray);



// 11*. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
//
// const math = [1,5,4,7,8,9,12];
//
// function findSum(arr) {
//     let result = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (result <= 10) {
//             result += arr[i]
//         } else {
//             console.log(i);
//             break;
//         }
//     }
// }
//
// findSum(math);



// 12*. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]
//
let array = [1, 2, 3, 4, 5, 6];

function sort(arr) {
    let array2 = [];

    for(let i = 0; i < array.length; i += 2) {
        array2.push(array[i+1], array[i])
    }
    return array2
}

console.log(sort(array));