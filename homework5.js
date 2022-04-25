// 1. Написать функцию которая выводит на ваше усмотрение ( определенные поля(пример name, surname) у принимаемых обьектов , с использованием this ( call, bind, apply))
// example:
//   showInfo(obj1)  // name: 'test', age: 22, surname: 'stassov'
//   showInfo(obj2)  // name: 'test2', age: 12, surname: 'bolov'

// const objFirst = {
//     name: 'Vladick',
//     surname: 'Shabaltasov',
//     age: 13,
// };
// const  objSecond = {
//     name: 'Chebyrek',
//     surname: 'Belyashov',
//     age: 15,
// };
//  function myFunction () {
//      return `name:${this.name}`;
//
//  }
// console.log(myFunction.apply(objSecond));
// console.log(myFunction.apply(objFirst));



//2 Дан массив чисел размерностью 10 элементов. Написать функцию, которая  сортирует массив по возрастанию или по убыванию,
// в зависимости от третьего  параметра функции. Если он равен 1, сортировка идет по убыванию, если 0, то по
// возрастанию. Первые 2 параметра функции это массив и его размер, третий параметр  по умолчанию равен 1.

// let myArr = [-1, 2, 9, 23, -12, 6, -21, 8, 4, 10];
// console.log(myArr);
//
// function sort(arr, num, myNum = 1) {
//     arr.splice(num);
//     if (myNum === 1) {
//         for (let i = 0; i <= num; i++) {
//
//             for (let j = 0; j <= arr.length; j++) {
//                 let x = arr[j];
//                 if (arr[j] > arr[j + 1]) {
//
//                     arr[j] = arr [j + 1];
//                     arr[j + 1] = x;
//                 }
//             }
//         }
//     } else if (myNum === 0) {
//         for (let i = 0; i <= num; i++) {
//
//             for (let j = 0; j <= arr.length; j++) {
//                 let x = arr[j];
//                 if (arr[j] < arr[j + 1]) {
//
//                     arr[j] = arr [j + 1];
//                     arr[j + 1] = x;
//                 }
//             }
//
//         }
//
//     }
//     return arr;
// }
//
// console.log(sort(myArr, 7, 0));


// function sort(arr, num, myNum ) {
//     arr.splice(num);
//
//     for (let i = 0; i <= num; i++) {
//
//         for (let j = 0; j <= arr.length; j++) {
//             let x = arr[j];
//             if (myNum === 1 && arr[j] > arr[j + 1]) {
//                 arr[j] = arr [j + 1];
//                 arr[j + 1] = x;
//             } else if (myNum === 0 && arr[j] < arr[j + 1]) {
//                 arr[j] = arr [j + 1];
//                 arr[j + 1] = x;
//
//
//             }
//         }
//
//     }
//     return arr;
//     }
// console.log(sort(myArr, 7, 0));





//3 сколько различных чисел в заданном массиве
// example: const testArr = [1,1,2,3,4,4]
// result: 4

// let arrNumber = [7, 3, 4, 5, 6, 6, 2, 1, 6];
// function number(arr) {
//     let num = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         let uniqueFlag = true;
//         for (let j = i-1; j >= 0; j--) {
//             if (arr[i] === arr[j]) {
//                 uniqueFlag = false;
//             }
//
//         } if (uniqueFlag) {
//             num++;
//         }
//
//     }
//   return num;
// }
//
// console.log(number(arrNumber));





//4 третий массив есть пересечение двух заданых (совпадения чисел в 1 и 2 массиве)
// example:
// const testArr1 = [1,32,2,3,4,4]
// const testArr2 = [99,12,32,4]
// result: [4,32]

// let arrOne = [5, 4, 65, 4];
// let arrTwo = [65, 14, 4, 5];
//  function twoArr(arr1, arr2) {
//      let arrFinish = [];
//      for (let i = 0; i < arr1.length; i++) {
//          for (let j = 0; j < arr2.length; j++) {
//              if (arr1[i] === arr2[j]) {
//                  arrFinish.push(arr1[i]);
//              }
//          }
//      }
//   return arrFinish;
//  }
//
// console.log(twoArr(arrOne,arrTwo));



//5 обьеденить два упорядоченных(отсортированных) массива таким образом чтоб в результирующем массиве все эллементы были различны
// example:
// const testArr1 = [1,2,3,4]
// const testArr2 = [3,4,5,6]
// result: [1,2,3,4,5,6]

// const testArr1 = [2,1,2,3,4,8,7];
// const testArr2 = [4,7,3,4,5,6];
// function twoArr(arr1, arr2) {
//     let allArr = arr1.concat(arr2);
//     for ( let i = 0; i <= allArr.length; i++) {
//         for ( let j = i-1; j >= 0; j--) {
//             if (allArr[i] === allArr[j]) {
//                 allArr.splice(i--, 1);
//                 break;
//             }
//         }
//     }
//     return allArr;
// }
//
// console.log(twoArr(testArr1,testArr2));



// 6 все ли эллементы массива различны ( Вернет true или false )

// const randomArr = [2,5,6,7,6,5,4,1,1,3];
//     function number (arr) {
//             for (let i = 0; i < arr.length; i++) {
//                 for (let j = i+1; j < arr.length; j++) {
//                     if (arr[i] === arr[j]) {
//                         return false
//                     }
//                 }
//             }
//             return true
//     }
//
// console.log(number(randomArr));


// 7 индекс последнего минимального значения ( вернет индекс ( минимального числа ))

// let arr = [2,4,6,7,1,2];
//     function sum(arr) {
//     let start = 0;
//         for (let i =0; i <= arr.length; i++) {
//          if (arr[start] > arr[i]) {
//              start = i;
//          }
//         }
// return start
//     }
//
// console.log(sum(arr));
//
//



// 8 Напишите функцию, которая для заданных двух массивов определяет, существуют ли одинаковые подряд идущие элементы.
// Массивы должны быть разной длины. Вернет true или false

// let arrOne = [1, 5, 6, 7, 8, 7];
// let arrTwo = [2, 5, 7, 11, 14, 7, 11, 16];
// function arrCheck(arr1, arr2) {
//     const arrThree = [...arr1,...arr2];
//     let num = false;
//     for (let i = 0; i < arrThree.length; i++) {
//         if ( arrThree[i] === arrThree[i+1] ) {
//             num = true;
//         }
//     }
//     return num
// }
//
// console.log(arrCheck(arrOne,arrTwo));







// 9 Создать класс Дом у которого есть окна и двери.

class home {
    constructor(windows, doors) {
        this.windows = windows;
        this.doors = doors;
    }

// 9.1 Написать setter-ы которые будут красить окна, красить двери и красить весь дом ( 3 сеттера)

    set colorsWindows(color) {
        this.windows = color;
        console.log('окна покрашены');
    }


    set colorsDoors(color) {
        this.doors = color;
        console.log('Двери покрашены');
    }

    set colorHome(color) {
        this.windows = color;
        this.doors = color;
        console.log('Дом покрашен');
    }


// 9.2 Написать getter-ы которые будут возвращать цвет окон, цвет дверей и цвет всего дома.

    get windowsColors() {
        return this.windows;
    }

    get doorsColors() {
        return this.doors
    }

    get homeColors() {
        const allHome = {
            doors: this.doors,
            windows: this.windows
        };
        return allHome
    }

}


// 9.3 Создать Пентхаус который будет потомком класса ДОМ ( extend ) с новыми полями ( бассейн, гараж )

// class DesertEagle extends Pistol {
//   constructor(weight, color, country) {
//     super(weight, color, country);

class Penthouse extends home {
    constructor( doors, windows, pool, garage ) {
        super(windows, doors);
        this.pool = pool;
        this.garage = garage;
    }


// 9.4 Класс пентхаус должен иметь свой метод открыть/закрыть гараж

openGarage () {
    if (this.garage === 'open') {
        console.log('гараж открыт');


    }else {
        console.log('гараж закрыт');
    }

    }
}




