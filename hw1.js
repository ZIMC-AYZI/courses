// // 3. Задача (Оператор switch)
// // При помощи prompt запросить у пользователя номер дня недели.
// //  Вывести при помощи alert название дня недели.
// //  если пользователь ввел некорректное значение вывести
// //   сообщение "Такого дня недели не существует!"
// РЕШЕНИЕ
//
// let result = +prompt('Напиши день недели (цифрой)');
//
// function week(day) {
//     switch (day) {
//         case 1: {
//             alert('Понедельник');
//             break;
//         }
//         case 2: {
//             alert('Вторник');
//             break;
//         }
//         case 3: {
//             alert('Среда');
//             break;
//         }
//         case 4: {
//             alert('Четверг');
//             break;
//         }
//         case 5: {
//             alert('Пятница');
//             break;
//         }
//         case 6: {
//             alert('Суббота');
//             break;
//         }
//         case 7: {
//             alert('Воскресенье');
//             break;
//         }
//         default: {
//             alert('Такого дня недели не существует!')
//         }
//     }
// }
//
// week(result);
// TODO ПЕРЕПИСАТЬ НА ОПЕРАТОР SWITCH используя case
// ГОТОВО


// // 5. Задача (Условный оператор)
// // Найти максимальное из двух чисел.
// // Учтите вариант равенства чисел
//
// РЕШЕНИЕ
//
// function math() {
//     const first = +prompt('Давай сравним 2 числа, какое больше?');
//     const second = +prompt('Введи второе число');
//     alert(first > second ? first : first < second ? second : 'Числа равны');
// }
//
// math();

// TODO занеси промты (first,second) в функцию что-бы окна с вводом вылезали только при вызове функции
// TODO нету смысла в функции принимать аргументы, т.к при ее вызове будет инициализированы константы а и б с которыми пойдет логика работы
// TODO использую тернарный оператор исправь функцию на 1 строку EXAMPLE: const a = 1;const b = 2;console.log(a > b ? a : a < b ? b : 'числа равны')
// ГОТОВО

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
// function result() {
//     let entrance = +prompt('Введи номер квартиры, а я скажу в каком она подьезде');
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
// result();

// TODO вынести промты в функцию что-бы промт отрабатывал при вызове функции
// ГОТОВО

// // 7. Задача (Условный оператор)
// // Пользователь вводит логин и пароль.
// // (должны быть 2 - 3 обьекта с полями логина и пароля, собственно по ним и делай проверки)
// // Если логин и пароль совпадают с указанными ниже,
// // то выводится «Добро пожаловать». Если не совпадают –
// // то «Ошибка входа»
//
// РЕШЕНИЕ
//
// function login() {
//     let name = prompt('Введи логин');
//     let password = prompt('Введи пароль');
//     alert(name === 'Stas' && password === 'Huesos' ? 'Добро пожаловать' : 'Ошибка входа')
// }
//
// login();

// TODO вынести промты в функцию что-бы промт отрабатывал при вызове функции
// TODO использую тернарный оператор исправь функцию на 1 строку EXAMPLE: const a = 1;const b = 2;console.log(a > b ? a : a < b ? b : 'числа равны')
// ГОТОВО

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
//     alert(userAge >= 16 ? 'Добро пожаловать' : 'Вход воспрещен')
// }
//
// age();
//
// TODO использую тернарный оператор исправь функцию на 1 строку EXAMPLE: const a = 1;const b = 2;console.log(a > b ? a : a < b ? b : 'числа равны')
// ГОТОВО

// // 9. Задача (Условный оператор)
// // Создайте программу, которая выводит надбавку за стаж.
// // Пользователь вводит стаж работы, а программа пишет ему надбавку.
// // ( условные блоки с рандомным значением надбавки в консоль в зависимости от опыта )
//
// РЕШЕНИЕ
//
// function money() {
//     const experience = prompt('Введите ваш стаж работы');
//     alert(experience <= 5 ? 'Ваша надбавка 50$' : experience <= 10 ? 'Ваша надбавка 100$' : 'Ваша надбавка 500$')
// }
// money();
//
// TODO использую тернарный оператор исправь функцию на 1 строку EXAMPLE: const a = 1;const b = 2;console.log(a > b ? a : a < b ? b : 'числа равны')
// ГОТОВО



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

// ЗАДАЧА С АЭРОПОРТОМ
//
// РЕШЕНИЕ
//
// function airport() {
//     let airType = prompt('Введите тип самолета');
//     const userTime = prompt('Введите ваше время вылета');
//     const splitTime = userTime.split(':');
//     const userTimeInMin = (+splitTime[0] * 60) + +splitTime[1];
//     const aTerminal = {
//         startTime: getMin(6),
//         endTime: getMin(18),
//         g1Start: getMin(6),
//         g1End: getMin(10),
//         g2Start: getMin(10),
//         g2End: getMin(14),
//         g3Start: getMin(14),
//         g3End: getMin(18)
//     };
//     const bTerminal = {
//         startTime: getMin(3),
//         endTime: getMin(21),
//         s10Start: getMin(3),
//         s10End: getMin(12),
//         s21Start: getMin(12),
//         s21End: getMin(18),
//         s32Start: getMin(20),
//         s32End: getMin(21)
//     };
//     const cTerminal = {
//         time: new Date(),
//         n43Start: getMin(6),
//         n43End: getMin(14),
//         n35Start: getMin(14),
//         n35End: getMin(20),
//         n67Start: getMin(20),
//         n67End: getMin(6)
//     };
//     if (airType === 'AX2022') {
//         if (userTimeInMin >= aTerminal.g1Start && userTimeInMin <= aTerminal.g1End ||
//             userTimeInMin >= cTerminal.n43Start && userTimeInMin <= cTerminal.n43End) {
//             alert('Вы можете пройти в терминал А (ворота G1), либо в терминал C (ворота N43)')
//         } else if (userTimeInMin >= aTerminal.g2Start && userTimeInMin <= aTerminal.g2End ||
//             userTimeInMin >= cTerminal.n43Start && userTimeInMin <= cTerminal.n43End) {
//             alert('Вы можете пройти в терминал А (ворота G2), либо в терминал C (ворота N43)')
//         } else if (userTimeInMin >= aTerminal.g3Start && userTimeInMin <= aTerminal.g3End ||
//             userTimeInMin >= cTerminal.n35Start && userTimeInMin <= cTerminal.n35End) {
//             alert('Вы можете пройти в терминал А (ворота G3), либо в терминал C (ворота N35)')
//         } else if (userTimeInMin <= cTerminal.n67Start && userTimeInMin >= cTerminal.n67End) {
//             alert('Вы можете пройти в терминал C (ворота N67)')
//         } else {
//             alert('Не работает')
//         }
//     }
//     if (airType === 'UK20B' && userTimeInMin >= aTerminal.g1Start && userTimeInMin <= aTerminal.g1End) {
//         alert('Вам необходимо пройти в терминал А (ворота G1)')
//     } else if (airType === 'UK20B' && userTimeInMin >= aTerminal.g2Start && userTimeInMin <= aTerminal.g2End) {
//         alert('Вам необходимо пройти в терминал А (ворота G2)')
//     } else if (airType === 'UK20B' && userTimeInMin >= aTerminal.g3Start && userTimeInMin <= aTerminal.g3End) {
//         alert('Вам необходимо пройти в терминал А (ворота G3)')
//     } else if (airType === 'GL8000' && userTimeInMin >= bTerminal.s10Start && userTimeInMin <= bTerminal.s10End) {
//         alert('Вам необходимо пройти в терминал В (ворота S10)')
//     } else if (airType === 'GL8000' && userTimeInMin >= bTerminal.s21Start && userTimeInMin <= bTerminal.s21End) {
//         alert('Вам необходимо пройти в терминал В (ворота S21)')
//     } else if (airType === 'GL8000' && userTimeInMin >= bTerminal.s32Start && userTimeInMin <= bTerminal.s32End) {
//         alert('Вам необходимо пройти в терминал В (ворота S32)')
//     } else {
//         alert('Не работает')
//     }
// }
//
// function getMin(hours) {
//     const date = new Date();
//     date.setHours(hours);
//     return date.getHours() * 60;
// }
//
// airport();
