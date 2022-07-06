//================== № 1 =====================

//let fourHundred = []
//for (let i = 4; i <= 400; i++) {
//    fourHundred.push(i)
//}

//console.log(fourHundred,'fourHundred')


//================ № 2 =========================

//let secondTask = []
//for (let i = 4; i <= 13; i+=3) {
//    secondTask.push(i)

//}
//console.log(secondTask, 'secondTack')

//================== № 3 =========================

//let thirdTask = []
//for (let i = 635; i !== 0; i--) {
//    thirdTask.push(i)
//}
//console.log(thirdTask, 'thirdTask')

//================== № 4 =========================

//let fourthTask = []
//for (let i = 1983; i <= 2017; i++) {
//fourthTask.push(i)

//}
//console.log(fourthTask, 'fourthTack')

//================== № 5 =========================

//let fifthTask = []
//for (let i = -4; i <= 100; i++){
//    fifthTask.push(i)
//}
//console.log(fifthTask,'fifthTask')

//================== № 6 =========================

//let fifthTask = []
//for (let i = 0; i <= 9; i++){
//    fifthTask.push(i * 7)

//}
//console.log(fifthTask, 'fifthTask')

//================== № 7 =========================

//let seventhTask = 0;
//for (let i = 0; i <= 100; i++) {
//    seventhTask += i;
//}
//console.log(seventhTask, 'seventhTask')

//================== № 8 =========================

//let eighthTask = 1
//for (let i = 1; i <= 10; i++){
//eighthTask *= i
//}
//console.log(eighthTask, 'eighthTask')

//=================== № 9 =========================

//let xArr = []
//let pr = prompt()
//let x = 'x'
//for (let i = 0; i < pr; i++){
//  xArr.push(x)
//x += 'х'
//}
//console.log(xArr)

//=================== № 10 =======================

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

// let num = 0
// let array = [1,2,3,4,5]
// for (let i = 0; i < array.length; ++i) {
//    num += array[i]
// }
// console.log('Сумма чисел в массиве =', num)

//=================== № 12 =======================

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

//=================== № 13 =======================

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

//=================== № 14 =======================

//let num = 0
//let arrInArr = [[1, 2, 3], [4, 5], [6]]
//for (let i = 0; i < arrInArr.length; i++){
//    for (j = 0; j < arrInArr[i].length; j++ ){
//        num += parseFloat(arrInArr[i][j])
//    }
//}
//console.log(num,'num')

//=================== № 15 =======================

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


