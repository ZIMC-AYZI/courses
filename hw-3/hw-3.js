//================== № 1 =====================
// Вывести числа от 4 до 400 на экран.

// let fourHundred = []
// for (let i = 4; i <= 400; i++) {
//    fourHundred.push(i)
// }
//
// console.log(fourHundred,'fourHundred')


//================ № 2 =========================
// Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// let secondTask = []
// for (let i = 4; i <= 13; i+=3) {
//    secondTask.push(i)
//
// }
// console.log(secondTask, 'secondTack')

//================== № 3 =========================
// Вывести числа 654 653 652 до нуля.

//let thirdTask = []
//for (let i = 635; i !== 0; i--) {
//    thirdTask.push(i)
//}
//console.log(thirdTask, 'thirdTask')

//================== № 4 =========================
// Вывести все годы с 1983 до 2017.

//let fourthTask = []
//for (let i = 1983; i <= 2017; i++) {
//fourthTask.push(i)

//}
//console.log(fourthTask, 'fourthTack')

//================== № 5 =========================
// Вывести числа -4 -2 0 2 4 6 ...100.

//let fifthTask = []
//for (let i = -4; i <= 100; i++){
//    fifthTask.push(i)
//}
//console.log(fifthTask,'fifthTask')

//================== № 6 =========================
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

//let fifthTask = []
//for (let i = 0; i <= 9; i++){
//    fifthTask.push(i * 7)

//}
//console.log(fifthTask, 'fifthTask')

//================== № 7 =========================
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)

//let seventhTask = 0;
//for (let i = 0; i <= 100; i++) {
//    seventhTask += i;
//}
//console.log(seventhTask, 'seventhTask')

//================== № 8 =========================
// С помощью цикла вывести произведение чисел от 1 до 50. ( 0 умноженный на 1 ,
//     ето число умноженное на 2, это число умноженное на 3 и т.д)

//let eighthTask = 1
//for (let i = 1; i <= 10; i++){
//eighthTask *= i
//}
//console.log(eighthTask, 'eighthTask')

//=================== № 9 =========================
// Заполните массив следующим образом: в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

//let xArr = []
//let pr = prompt()
//let x = 'x'
//for (let i = 0; i < pr; i++){
//  xArr.push(x)
//x += 'х'
//}
//console.log(xArr)

//=================== № 10 =======================
// Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

//let arr = []
//let pr = prompt()
//for (let i = 1; i <= pr; i++){
//    let secondArr = ''
//    for (let j = 1; j <= i ; j++){
//        secondArr += i
//    }
//    arr.push(secondArr)
//}
//console.log(arr)

//=================== № 11 =======================
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
//     let array = [1, 2, 3, 4, 5];

// let num = 0
// let resultArr = []
// let array = [1,2,3,4,5]
// for (let i = 0; i < array.length; ++i) {
//    num += array[i]
//     if (num >=10){
//         resultArr = [...resultArr, i+1]
//     }
// }
// console.log(resultArr[0],'resultArr')

//=================== № 12 =======================
// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]

// let changeNumsArr = [1,2,3,4,5,6]
// for (let i = 0; i < changeNumsArr.length; i++){
//     if (i % 2 === 0){
//         let el = parseFloat(changeNumsArr.splice(i, 1))
//         el +=1
//         changeNumsArr.splice(i, 0, el)
//     }else {
//         let elOne = changeNumsArr.splice(i, 1)
//         elOne -=1
//         changeNumsArr.splice(i, 0, elOne)
//     }
// }
//
// console.log(changeNumsArr,'changeNumsArr')

//======================== Method #2 =============================

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i += 2) {
//      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
// }
// console.log(arr)

//======================== Method #3 =============================

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i <= arr.length-1; i += 2) {
// let x = arr[i];
// arr[i] = arr [i + 1];
// arr[i + 1] = x;
// }
// console.log(arr);

//=================== № 13 =======================
// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]

// let reversNum = [1,2,3,4,5,6]
// for (let i = 0; i < reversNum.length; i++) {
//     if (i % 2 === 0) {
//         let el = parseFloat(reversNum.splice(0, 1))
//         el +=1
//         reversNum.splice(reversNum.length - i, 0, el)
//     } else {
//         let elOne = parseFloat(reversNum.splice(0, 1))
//         elOne -= 1
//         reversNum.splice(reversNum.length - i, 0, elOne)
//     }
// }
// console.log(reversNum)

//=================== Method #2 ==================

// let reversNum = [1,2,3,4,5,6]
// let arr = []
// for (let i = reversNum.length - 1; i >= 0; i -= 2){
//     let[x,y] = [reversNum[i], reversNum[i - 1]]
//     arr.push(y,x)
// }
// console.log(arr,'arr')


//=================== № 14 =======================
// Дан двухмерный массив с числами, [[1, 2, 3], [4, 5], [6]]. Найдите сумму
// элементов этого массива.

// let num = 0
// let arrInArr = [[1, 2, 3], [4, 5], [6]]
// for (let i = 0; i < arrInArr.length; i++){
//    for (j = 0; j < arrInArr[i].length; j++ ){
//        num += parseFloat(arrInArr[i][j])
//    }
// }
// console.log(num,'num')

//=================== № 15 =======================
// Написать функцию которая принимает в себя строку ( пример : 'Hello word' ) , функция должна вернуть фразу
// наоборот ( пример : 'drow olleH')

//let str = 'Hello word'
//let strReverse = (str.split('').reverse()).join('')
//console.log(strReverse)

//============= Method #2 =========================

// let str = 'Hello word'
// let strReverse = str.split('')
// for (let i = 0; i < strReverse.length; i ++){
//     let delStr = strReverse.splice(0, 1)
//     strReverse.splice(strReverse.length - i, 0, delStr)
// }
// strReverse = strReverse.join('')
// console.log(strReverse,'strReverse')

//============= Method #3 =========================
// let str = 'Hello word'
// let strArr = str.split('')
// let strReverse = ''
// for (let i = 0; i <strArr.length; i++ ) {
//         strReverse += strArr[(strArr.length - 1) - i]
//     }
//     str = strReverse
// console.log(str, 'str');


//=================== № 15* ======================
// нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )

// let matrix =  []
//
// for (let i = 0; i < 10; i++) {
//  const testArr = []
//
// for (let j = 0; j < 10; j++) {
//  let el = i === j || j === 9 - i || j === 0 || i === 0 || j === 9 || i === 9 ? 'x' : '0'
// testArr.push(el)
// }
// matrix.push(testArr)
// }
// console.log(matrix, 'matrix')

//=================== № 16 =======================
// нарисовать матрицу (таблица умножения)

//let multiply = []

//for (let i = 1; i <=10; i++) {

//    const multiplyArr = []

//    for (let j = 1; j <= 10; j++) {
//        let el = i === j ? i * j: i * j
//        multiplyArr.push(el)
//    }
//multiply.push(multiplyArr)
//}
//console.log(multiply, 'multiply')



