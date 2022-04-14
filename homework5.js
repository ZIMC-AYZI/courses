// 1. Написать функцию которая выводит на ваше усмотрение ( определенные поля(пример name, surname) у принимаемых обьектов , с использованием this ( call, bind, apply)) (done)
// example:
//   showInfo(obj1)  // name: 'test', age: 22, surname: 'stassov'
//   showInfo(obj2)  // name: 'test2', age: 12, surname: 'bolov'

// const manager = {
//     name: 'Stas',
//     surname: 'Petrow',
//     age: 20 + ' y.o.',
//
//
// };
// const admin = {
//     name: 'Petya',
//     surname: 'Zalupkin',
//     age: 15 + ' y.o.',
//
//
// };
//
//
// function getInfo() {
//     return `name: ${this.name}, surname: ${this.surname}, age: ${this.age}`
// }
//
// console.log(getInfo.apply(admin));
// console.log(getInfo.apply(manager));


//2 Дан массив чисел размерностью 10 элементов. Написать функцию, которая  сортирует массив по возрастанию или по убыванию,
// в зависимости от третьего  параметра функции. Если он равен 1, сортировка идет по убыванию, если 0, то по
// возрастанию. Первые 2 параметра функции это массив и его размер, третий параметр  по умолчанию равен 1. (done)


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
//
//
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
//
//         }
//
//
//     }
//     return arr;
// }
//
//
// console.log(sort(myArr, 7, 0));

//3 сколько различных чисел в заданном массиве
// example: const testArr = [1,1,2,3,4,4] (done)
// result: 4


// const arr = [1, 1, 2, 3, 4, 4];
//
//
// function sort(arr) {
//
// let num = 0;
//
// for (let i = 0; i <= arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; i++) {
//         if (arr[i] === arr[j]) {
//             num++;
//             break;
//         }
//     }
// }
//     return num;
// }
// console.log(sort(arr));


//4 третий массив есть пересечение двух заданых (совпадения чисел в 1 и 2 массиве) (done)
// example:
// const testArr1 = [1,32,2,3,4,4]
// const testArr2 = [99,12,32,4]
// result: [4,32]


// const arrOne = [1,32,2,3,4,7,8];
// const arrTwo = [99,12,32,4,5,7];
//
// function sort(arr1, arr2) {
//
// let final = [];
//
// for (let i = 0; i < arr1.length; i++) {
//
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             final.push(arr1[i]);
//
//         }
//     }
// }
//     return final;
// }
// console.log(sort(arrOne,arrTwo));


//5 обьеденить два упорядоченных(отсортированных) массива таким образом чтоб в результирующем массиве все эллементы были различны
// example:
// const arrOne = [1, 2, 3, 4];
// const arrTwo = [3, 4, 5, 6];
//
// function sort(arr1, arr2) {
//
//     for (let i = 0; i < arr1.length; i++) {
//
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === (arr2[j])) {
//                 arr2.splice(j, 1);
//                 break
//             }
//         }
//     }
//     arr1 = [...arr1, ...arr2];
//     return arr1;
// }
//
// console.log(sort(arrOne, arrTwo));


// 6 все ли эллементы массива различны ( Вернет true или false ) (done)

// let arr = [1, 2, 3, 4, 2, 4, 5, 1, 6];
// arr.sort();
// console.log(arr);
// function check(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === arr[i+1]) {
//             return false
//         } else {
//             return true
//
//         }
//     }
//
// }
//
// console.log(check(arr));

// 7 индекс последнего минимального значения ( вернет индекс ( минимального числа )) (done)

// let arr = [5,4,3,7,5,7,9,4,7,4];
// arr.sort();
// console.log(arr);
// function check(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] < arr[i+1]) {
//             return arr[i]
//         }
//
//
//     }
//
// }
//
// console.log(check(arr));

// 8 Напишите функцию, которая для заданных двух массивов определяет, существуют ли одинаковые подряд идущие элементы.
// Массивы должны быть разной длины. Вернет true или false (done)

// let arrOne = [1, 2, 3, 4];
// let arrTwo = [2, 2, 4, 5, 3, 2, 4, 6];
//
// function check(arr1, arr2) {
//     const arrSum = [...arr1, ...arr2];
//     console.log(arrSum);
//     let zaza = false;
//     for (let i = 0; i < arrSum.length; i++) {
//         if (arrSum[i] === arrSum[i + 1]) {
//             zaza = true;
//         }
//
//
//     }
//     return zaza;
//
// }
//
// console.log(check(arrOne, arrTwo));

// 9 Создать класс Дом у которого есть окна и двери.

class Home {
    constructor(windows, doors) {
        this.windows = windows;
        this.doors = doors;
    }


// 9.1 Написать setter-ы которые будут красить окна, красить двери и красить весь дом ( 3 сеттера)
    set colorWindow(color) {
        this.windows = color;
        console.log('Окна покрашены');
    }

    set colorDoor(color) {
        this.doors = color;
        console.log('Двери покрашены');
    }

    set colorAll(color) {
        this.doors = color;
        this.windows = color;
        console.log('Дом покрашен');

    }


// 9.2 Написать getter-ы которые будут возвращать цвет окон, цвет дверей и цвет всего дома.
    get doorColor() {
        return this.doors;
    }

    get windowsColor() {
        return this.windows;
    }

    get homeColor() {
        const full = {
            doors: this.doors,
            windows: this.windows
        };
        return full
    }
}

// 9.3 Создать Пентхаус который будет потомком класса ДОМ ( extend ) с новыми полями ( бассейн, гараж )

class Penthouse extends Home {
    constructor(windows, doors, pool, garage) {
        super(windows, doors);
        this.pool = pool;
        this.garage = garage;
    }


// 9.4 Класс пентхаус должен иметь свой метод открыть/закрыть гараж
    openGarage() {
        if (this.garage === 'open') {
            console.log('Гараж открыт');
        } else {
            console.log('Гараж закрыт');
        }
    }


}
