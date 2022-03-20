// // 3. Задача (Оператор switch)
// // При помощи prompt запросить у пользователя номер дня недели.
// //  Вывести при помощи alert название дня недели.
// //  если пользователь ввел некорректное значение вывести
// //   сообщение "Такого дня недели не существует!"
// РЕШЕНИЕ
// let result = +prompt('Напиши день недели (цифрой)');
//
// function week(day) {
//     if (day === 1) {
//         alert('Понедельник')
//     } else if (day === 2) {
//         alert('Вторник')
//     } else if (day === 3) {
//         alert('Среда')
//     } else if (day === 4) {
//         alert('Четверг')
//     } else if (day === 5) {
//         alert('Пятница')
//     } else if (day === 6) {
//         alert('Суббота')
//     } else if (day === 7) {
//         alert('Воскресенье')
//     } else {
//         alert('Такого дня недели не существует!')
//     }
// }
//
// week(result);

// // 4. Задача (Условный оператор)
// // Пользователь вводит два числа. Найти и вывести максимальное
// //  из двух чисел.
//
// РЕШЕНИЕ
//
// let first = +prompt('Давай сравним 2 числа, какое больше?');
// let second = +prompt('Введи второе число');
//
// function math(number) {
//     if (first < second) {
//         alert(second)
//     } else if (first > second) {
//         alert(first)
//     } else {
//         alert('Zalupa ne rabotaet')
//     }
// }
//
// math(first);

// // 5. Задача (Условный оператор)
// // Найти максимальное из двух чисел.
// // Учтите вариант равенства чисел
//
// РЕШЕНИЕ
//
// let first = +prompt('Давай сравним 2 числа, какое больше?');
// let second = +prompt('Введи второе число');
//
// function math(number) {
//     if (first < second) {
//         alert(second)
//     } else if (first > second) {
//         alert(first)
//     } else {
//         alert('Числа равны')
//     }
// }
//
// math(first);

// // 6. Задача (Условный оператор)
// // В первом подъезде квартиры с 1 по 20.
// // Во втором с 21 по 48. В третьем с 49 по 90.
// //  Пользователь вводит номер квартиры.
// //  Программа должна указать в каком подъезде находится
// //   данная квартира. Программа должна учитывать
// //    вариант ввода чисел за пределами диапазона 1..90.
//
// РЕШЕНИЕ
//
// let entrance = +prompt('Введи номер квартиры, а я скажу в каком она подьезде');
//
// function result(number) {
//     if (entrance <= 20) {
//         alert('Квартира в первом подьезде')
//     } else if (entrance <= 48) {
//         alert('Квартира во втором подьезде')
//     } else if (entrance <= 90) {
//         alert('Квартира в третьем подьезде')
//     } else {
//         alert('Такой квартиры у нас нет')
//     }
// }
//
// result(entrance);

// // 7. Задача (Условный оператор)
// // Пользователь вводит логин и пароль.
// // (должны быть 2 - 3 обьекта с полями логина и пароля, собственно по ним и делай проверки)
// // Если логин и пароль совпадают с указанными ниже,
// // то выводится «Добро пожаловать». Если не совпадают –
// // то «Ошибка входа»
//
// РЕШЕНИЕ
//
// let name = prompt('Введи логин');
// let password = prompt('Введи пароль');
//
// function login(go) {
//     if (name === 'Stas' && password === 'Eblan') {
//         alert('Добро пожаловать!')
//     } else {
//         alert('Ошибка входа')
//     }
// }
//
// login(name);

// // 8. Задача (Условный оператор)
// // Пользователь вводит год рождения. Программа показывает количество
// // лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// // если нет – «вход воспрещен».
//
// РЕШЕНИЕ
//
// function age() {
//     const birthday = prompt('Введите год рождения', '2020');
//     const currentYear = new Date().getFullYear();
//     const userAge = currentYear - birthday
//     if (userAge >= 16) {
//         alert('Добро пожаловать')
//     } else {
//         alert('Вход воспрещен')
//     }
// }
//
// age();

// // 9. Задача (Условный оператор)
// // Создайте программу, которая выводит надбавку за стаж.
// // Пользователь вводит стаж работы, а программа пишет ему надбавку.
// // ( условные блоки с рандомным значением надбавки в консоль в зависимости от опыта )
//
// РЕШЕНИЕ
//
// function money() {
//     const experience = prompt('Введите ваш стаж работы');
//     if (experience <= 5) {
//         alert('Ваша надбавка 50$')
//     } else if (experience <= 10) {
//         alert('Ваша надбавка 100$')
//     } else {
//         alert('Ваша надбавка 500$')
//     }
// }
//
// money();

// //  10. Задача (креативная)
// //  Написать программу которая будет склонять слово
// //  “товар” в зависимости от количества товаров в корзине.
// //  Например 1 - товар, 4 - товара, 6 - товаров.
// //  let myBag = prompt("сколько товаров хотите?", "3");
// //  результат вы приобрели 3 товара
//
// РЕШЕНИЕ
//
// function work() {
//     let product = +prompt('Сколько товаров хотите?', '3');
//     if (product === 1 || product > 20 && (product - 1) %10 === 0) {
//         alert(`Вы приобрели ${product} товар`)
//     } else if (product <= 4 || product > 21 && (product - 1) %10 === 0 || (product - 2) %10 === 0 ||
//     (product - 3) %10 === 0) {
//         alert(`Вы приобрели ${product} товара`)
//     } else if (product <= 20 || product %10 === 0) {
//         alert(`Вы приобрели ${product} товаров`)
//     } else if (product > 20) {
//         alert(`Вы приобрели ${product} товаров`)
//     } else {
//         alert('Не работает')
//     }
// }
//
// work();

// Пользователь вводит свой рост и свой вес.
// Формула расчета Массы тела пример
// рост 182
// вес 70
// формула равна 70 / (1.82 * 1.82 )
//
// 16 и менее    ►  Выраженный дефицит массы тела;
// 16 – 18,5     ►  Недостаточная масса тела (дефицит);
// 18,5 – 25     ►  Норма;
// 25 – 30       ►  Избыточная масса тела (состояние, предшествующее ожирению);
// 30 – 35       ►  Ожирение 1-й степени;
// 35 – 40       ►  Ожирение 2-й степени;
// 40 и более    ►  Ожирение 3-й степени.
//
// РЕШЕНИЕ
//
// function health() {
//     const height = +prompt(`Укажите вас рост`);
//     const weight = +prompt(`Укажите ваш вес`);
//     const analys = weight / ((height / 100) * (height / 100))
//     if (analys <= 16) {
//         alert('Выраженный дефицит массы тела')
//     } else if (analys <= 18.5) {
//         alert('Недостаточная масса тела (дефицит)')
//     } else if (analys <= 25) {
//         alert('Норма')
//     } else if (analys <= 30 ) {
//         alert('Избыточная масса тела (состояние, предшествующее ожирению)')
//     } else if (analys <= 35) {
//         alert('Ожирение 1-й степени')
//     } else if (analys <= 40) {
//         alert('Ожирение 2-й степени')
//     } else if (analys > 40) {
//         alert('Ожирение 3-й степени')
//     } else {
//
//     }
// }
//
// health();

// 123