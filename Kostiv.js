// function weekDay() {
//     const number = +prompt('Введите число:');
//     if (number === 1) {
//         alert('понедельник')
//     } else if (number === 2) {
//         alert('вторник')
//     } else if (number === 3) {
//         alert('среда')
//     } else if (number === 4) {
//         alert('четверг')
//     } else if (number === 5) {
//         alert('пятница')
//     } else if (number === 6) {
//         alert('суббота')
//     } else if (number === 7) {
//         alert('воскресенье')
//     } else {
//         alert('ты тупой')
//     }
// }
//
//
// weekDay();
// 1-20
// 21-40
// 41-60
//
// function entrance() {
//     const number = +prompt('Веди сука номер своей ебаннй кваритры змиевской');
//     if (number <= 20) {
//         alert('1 хуйлуша')
//     } else if (number <= 40) {
//         alert('2 хуйлуша')
//     } else if (number <= 60) {
//         alert('3 хуйлуша')
//     } else {
//         alert('бля брат такой тут нет')
//     }
// }
//
// entrance();

// function vlaDymaet() {
// //
// //
// //
// // const number = 3;
// // const vlad = +prompt('cюда пожалуйста');
// // const summary = (number+vlad);
// // alert (`cумма равняется ${summary}`);
// //
// // }
// // vlaDymaet();

//ЗАДАНИЕ 1
//Формула расчета Массы тела пример
// рост 182
// вес 70
// формула равна 70 / (1.82 * 1.82 )
//
//  16 и менее ►  Выраженный дефицит массы тела;
//  16 – 18,5      ►  Недостаточная масса тела (дефицит);
//  18,5 – 25     ►  Норма;
//  25 – 30       ►  Избыточная масса тела (состояние, предшествующее ожирению);
//  30 – 35       ►  Ожирение 1-й степени;
//  35 – 40       ►  Ожирение 2-й степени;
//  40 и более ►  Ожирение 3-й степени.

// function healthProgram() {
//     const height = +prompt('Введите свой рост пожалуйста что бы Владик не нерничал');
//     const weight = +prompt('Если вы не силно жирный введите свой вес');
//     const index = weight / ((height / 100) * (height / 100));
//     if (index <= 16) {
//         alert('Надо покушать и не раз')
//     } else if (index <= 18.5) {
//         alert('Так же покушайте но можно не так много')
//     } else if (index <= 25) {
//         alert('Ля какой жених')
//     } else if (index <= 30) {
//         alert('не брат отдай еду второму ему нужнее')
//     } else if (index <= 35) {
//         alert('Брат ты так долго не вывезешь прикрывай рот хоть иногда')
//     } else if (index <= 40) {
//         alert('Мальчик мой перестань жрать ты Умрешь')
//     } else if (index >=40) {
//         alert('Ахахахахха живой жирный труп тебе уже не помочь')
//     }
// }
//     healthProgram();

// 1. Задача (Условный оператор)
// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже,
// то выводится «Добро пожаловать». Если не совпадают –
// то «Ошибка входа»

// function secret() {
//     const login = prompt ('Пожалуйста введите свои три цифры с оборота карты');
//     const password = prompt('Ну а тут цирфры которые вам пришли по смс от банка');
//     const loginName = 'admin';
//     const passwordName = '123';
//     if (login === loginName && password === passwordName){
//         alert('приветули');
//     }
//     else {
//         alert ('иди домой дядя');
//
//     }
//
// // }
// secret();

// // 2. Задача (Условный оператор)
// // Пользователь вводит год рождения. Программа показывает количество
// // лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// // если нет – «вход воспрещен».

// function operator() {
//     const year = +prompt ('Когда тебя выплюнула мамка? число сюда!');
//     const years = ( 2022-year );
//     if (years >=16) {
//         alert(` Вам ${years} лет. Вход разрешен`)
//     }
//     else {
//         alert('Мальчик мой подрости')
//     }
//
// }
// operator();

// // 3. Задача (Условный оператор)
// // Создайте программу, которая выводит надбавку за стаж.
// // Пользователь вводит стаж работы, а программа пишет ему надбавку.
// опыт работы больше 3 лет - 10%
// опыт работы больше  10 лет - 20%
// опыт работы больше  20 лет - 30%
//
// сумма надбавки = оклад*процент надбавки

// function money() {
//     const experience = +prompt ('Сколько ты уже тут батрачишь?');
//     const moneyWho = +prompt('и скок тебе за это платят');
//     if (experience <=3) {
//         alert('Еще надо поработать бабок не будет');
//     }
//     else if (experience <=10) {
//         alert (`Ваша надбака состаляет ${(moneyWho*0.1)}`);
//     }
//     else if (experience <=20) {
//         alert(`Ваша надбака составляет ${(moneyWho*0.2)}`);
//     }
//     else if (experience <=100) {
//         alert(`Ваша надбака состалвяет ${(moneyWho*0.3)}`);
//     }
//
// }
//
// money();

// 2. Задача (Попадание точки в область)
// пользователь вводит x и y , если попал то выводим попал или не попал
//
// function shooting() {
//     const x = +prompt ('Ввидите координаты Х');
//     const y = +prompt('Введите координаты Y');
//     if ( x === 1 && y === 5) {
//         alert('Вы попали в точку 1')
//     }
//     else if ( x === 2 && y === 3) {
//         alert('Вы попали в точку 2')
//     }
//     else if ( x === 3 && y === 2 ) {
//         alert('Вы попали в точку 3')
//     }
//     else if ( x === 4 && y ===4 ) {
//         alert('Вы попали в точку 4')
//     }
//     else if ( x === 5 && y === 1) {
//         alert('Вы попали в точку 5')
//     }
//     else  {
//         alert('Вы промахнулись')
//     }
// }
// shooting()


// // Написать программу которая будет склонять слово
// //  “товар” в зависимости от количества товаров в корзине.
// //  Например 1 - товар, 4 - товара, 6 - товаров.
//1 товар
//
// 2-4 товара
//
// 5 - 10 товаров

// function declination() {
//     const input = +prompt ('Введите колличество товара');
//       const primer = input%10;
//     if (primer === 1) {
//         alert('Товар')
//     }
//     else if ( primer <=4 ) {
//         alert('товара')
//     }
//     else if (primer <=10) {
//         alert( 'товаров')
//     }
//     else {
//         alert('Столько товаров мы не посчитаем, давай сам принцип ты понял')
//     }
//
// }
// declination();