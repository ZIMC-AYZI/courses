// 1. Написать функцию которая выводит на ваше усмотрение ( определенные поля(пример name, surname) у принимаемых обьектов , с использованием this ( call, bind, apply))
// example:
//   showInfo(obj1)  // name: 'test', age: 22, surname: 'stassov'
//   showInfo(obj2)  // name: 'test2', age: 12, surname: 'bolov'


const obj1 = {
    name: 'Stas',
    surname: 'Petrow',
    age: 20,

};
const obj2 = {
    name: 'Petya',
    surname: 'Zalupkin',
    age:15,

};

function display() {
    alert(this.obj2);

}
obj1.display = name;





















//2 Дан массив чисел размерностью 10 элементов. Написать функцию, которая  сортирует массив по возрастанию или по убыванию,
// в зависимости от третьего  параметра функции. Если он равен 1, сортировка идет по убыванию, если 0, то по
// возрастанию. Первые 2 параметра функции это массив и его размер, третий параметр  по умолчанию равен 1.

//3 сколько различных чисел в заданном массиве
// example: const testArr = [1,1,2,3,4,4]
// result: 4

//4 третий массив есть пересечение двух заданых (совпадения чисел в 1 и 2 массиве)
// example:
// const testArr1 = [1,32,2,3,4,4]
// const testArr2 = [99,12,32,4]
// result: [4,32]

//5 обьеденить два упорядоченных(отсортированных) массива таким образом чтоб в результирующем массиве все эллементы были различны
// example:
// const testArr1 = [1,2,3,4]
// const testArr2 = [3,4,5,6]
// result: [1,2,3,4,5,6]

// 6 все ли эллементы массива различны ( Вернет true или false )
// 7 индекс последнего минимального значения ( вернет индекс ( минимального числа ))
// 8 Напишите функцию, которая для заданных двух массивов определяет, существуют ли одинаковые подряд идущие элементы.
// Массивы должны быть разной длины. Вернет true или false
// 9 Создать класс Дом у которого есть окна и двери.
// 9.1 Написать setter-ы которые будут красить окна, красить двери и красить весь дом ( 3 сеттера)
// 9.2 Написать getter-ы которые будут возвращать цвет окон, цвет дверей и цвет всего дома.
// 9.3 Создать Пентхаус который будет потомком класса ДОМ ( extend ) с новыми полями ( бассейн, гараж )
// 9.4 Класс пентхаус должен иметь свой метод открыть/закрыть гараж