// // 1. Вывести числа от 4 до 400 на экран. (done)
//

// const numbers = [];
// for (let i = 4; i < 401; i++) {
//     numbers.push(i)
//
// }
// console.log(numbers);

// 2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла. (done)

// const numbers = [];
// for (let i = 4; i <= 13; i+=3) {
//         numbers.push(i)
//
// }
//
// alert(numbers);


// 3. Вывести числа 654 653 652 до нуля. (done)


// const numbers = [];
// for (let i = 654; i >=0; i--) {
//     numbers.push(i);
//
// }
//
// alert(numbers);


// 4. Вывести все годы с 1983 до 2017. (done)

// const years = [];
// for (let i = 1983; i <= 2017; i++) {
//     years.push(i)
//
// }
// alert(years);


// 5. Вывести числа -4 -2 0 2 4 6 ...100. (done)

// const numbers = [];
// for (let i = -4; i < 101; i+=2) {
//     numbers.push(i)
//
// }
// alert(numbers);

// 6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9. (done) (ПРАВКА БЫЛА НУЖНА ТОЛЬКО ДЛЯ ВИЗУАЛЬНОГО ЭФФЕКТА? ЧТОБЫ ВСЕ ШЛО В СТОЛБИК? )

// const multiplicationTableFirstNumber = [];
// for (let i = 1; i <= 10; i++) {
//     const multiplicationTableSecondNumber = [];
//
//
//     for (let j = 7; j <= 7; j++) {
//
//
//         multiplicationTableSecondNumber.push((`${i} * ${j} = ${i * j}`));
//     }
//     multiplicationTableFirstNumber.push(multiplicationTableSecondNumber);
// }
//
// console.log(multiplicationTableFirstNumber);


// 7*. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)(done)


// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//
//      sum += i;
//
// }
//
// console.log(sum);


// 8*. С помощью цикла вывести произведение чисел от 1 до 50. ( 0 умноженный на 1 ,
//     ето число умноженное на 2, это число умноженное на 3 и т.д) (done)


// let factorial = 1;
// for (let i = 1; i <= 50; i++) {
//
//     factorial = i * factorial;
//
// }
//
// console.log(factorial);


// 9*.  Заполните массив следующим образом: в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt. (done)

// const arrLength = +prompt('Введите желаемую длину массива:');
// const arr = [];
// let x = '';
// for (let i = 1; i <= arrLength; i++) {
//   x += 'x';
//   arr.push(x)
// }
// console.log(arr);


// 10*.  Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt. (done)

// const arrLength = +prompt('Введите желаемую длину массива:');
// const arr = [];
//
// for (let i = 1; i <= arrLength; i++) {
//     let x = '';
//     for (let j = 1; j <= i; j++) {
//         x +=  i;
//
//     }
// arr.push(x)
//
// }
// console.log(arr);


// 11*. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. (done)
// let array = [1, 2, 3, 4, 5]; 1й пример
// const arr = [8, 2,3,8]; 2й пример

// let arr = [2, 7, 1, 7, 5];
//
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
//
//     sum += arr[i];
//     if (sum > 10 && sum < 11 + arr[i]) {
//         alert(`Для суммы больше 10 нужно ${i + 1} первых элементов массива`)
//     }
//
// }


// 12*. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5] (done)

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i <= 5; i+=2) {
//     let x = arr[i];
//     arr[i] = arr [i + 1];
//     arr[i + 1] = x;
// }
// console.log(arr);


// x = arr[0];
// arr[0] = arr [1];
// arr[1] = x;
// x = arr[2];
// arr[2]=arr[3];      ЛОГИКА ЗАДАЧИ
// arr[3]= x;
// x= arr[4];
// arr[4] = arr [5];
// arr[5] = x;
// }


// 13*. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2] (done)
// let arr = [1, 2, 3, 4, 5, 6];
//
// for (let i = 0; i <= 1; i++) {
//     let x = arr[i];
//     arr[i] = arr [i + 4];
//     arr[i + 4] = x;
// }
// console.log(arr);

// x = arr[0];
// arr[0] = arr [4];
// arr[4] = x;
// x = arr[1];
// arr[1]=arr[5];
// arr[5]= x;
// console.log(arr);


// 14*. Дан двухмерный массив с числами, [[1, 2, 3], [4, 5], [6]]. Найдите сумму (done)
// элементов этого массива. (done)

// let arr = [[2, 3, 3], [5, 5], [6]];
// let arrConcat = arr[0].concat(arr[1], arr[2]);
// let sum = 0;
// for (let i = 0; i <= arrConcat.length - 1; i++) {
//     sum += arrConcat[i];
//
// }
//
// console.log(sum);


// 15* Написать функцию которая принимает в себя строку ( пример : 'Hello word' ) , функция должна вернуть фразу
// наоборот ( пример : 'drow olleH') (done)
//


// function reverse(str) {
//
//     let newMessage = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//
//         newMessage += str[i];
//
//     }
//
//     alert(newMessage);
//
//
// }
//
// reverse('Hello word');


// 16*. нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 ) (done)
//     ['x', 'x', 'x', 'x', 'x' 'x', 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 'x', 'x', 'x', 'x', 'x','x']
//

// let pictureOut = [];
//
// for (let i = 0; i < 10; i++) {
//     const pictureIn = [];
//
//     for (let j = 0; j < 10; j++) {
//         let el = i === 0 || j === 9 ||i === 9 || j===0 ? 'x' : 0;
//         pictureIn.push(el);
//     }
//
//     pictureOut.push(pictureIn);
// }
// console.log(pictureOut);



// 17*. нарисовать матрицу (таблица умножения) (done)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// const multiplicationTableFirstNumber = [];
// for (let i = 1; i <= 10; i++) {
//     const multiplicationTableSecondNumber = [];
//
//
//     for (let j = 1; j <= 10; j++) {
//
//
//         multiplicationTableSecondNumber.push((`${i} * ${j} = ${i * j}`));
//     }
//     multiplicationTableFirstNumber.push(multiplicationTableSecondNumber);
// }
//
// console.log(multiplicationTableFirstNumber);
