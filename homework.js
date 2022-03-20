
// 1. Задача (Условный оператор)
// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже,
// то выводится «Добро пожаловать». Если не совпадают –
// то «Ошибка входа»


// function security() {
//     const login = prompt('Введите логин: ');
//     const password = prompt('Введите пароль: ');
//     const loginMain = 'admin';
//     const passwordMain = '123';
//
//     if ( login === loginMain && password === passwordMain) {
//         alert ('Добро пожаловать')
//     } else {
//         alert ('Допущена ошибка при вводе! Попробуйте еще раз')
//     }
// }
// security();


// 2. Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».

// function security() {
//     const year = +prompt('Введите Ваш год рождения:');
//     const age = 2022 - year;
//
//     if ( age >= 16 )  {
//         alert (`Вам ${age} лет! Доступ разрешен!`)
//     } else {
//         alert (`Вам ${age} лет! Доступ запрешен!`)
//     }
// }
// security();


// 3. Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
// Пользователь вводит стаж работы, а программа пишет ему надбавку.
// over 3 years - 10%
// оver 10 years - 20%
// over 20 years - 30%


// function seniorityaAllowance() {
//     const yearsExperience = +prompt('Введите Ваш стаж работы:');
//     const salary = +prompt('Введите Ваш оклад:');
//
//      if ( yearsExperience <= 3 )  {
//       alert (`Вашего стажа недостаточно для надбавки!`)
//      }     else if ( yearsExperience <=10 )  {
//         const procent = 0.10 ;
//         const allowance = salary*procent;
//         alert (`Ваша надбавка равна : ${allowance} грн!`)
//      } else if ( yearsExperience <= 20 )  {
//         const procent = 0.20 ;
//         const allowance = salary*procent;
//         alert (`Ваша надбавка равна : ${allowance} грн!`)
//     } else {
//         const procent = 0.30 ;
//         const allowance = salary*procent;
//         alert (`Ваша надбавка равна : ${allowance} грн!`)
//     }
// }
// seniorityaAllowance();




//4 Написать программу которая будет склонять слово
//  “товар” в зависимости от количества товаров в корзине.
//  Например 1 - товар, 4 - товара, 6 - товаров.

// 1 товар
//
// 2-4 товара
//
// 5 - 10 товаров
//
//  Делали с помощью Дена.
// function wordsDeclension() {
//     const number = +prompt('Введите кол-во товаров в корзине:');
//     const ten = 10;
//     const result2 = number % 100; // 11%100 c остатком, получиться тоже самое число
//     const result = result2 % ten ;
//     console.log(result2);
//     if (result2 >10 && result2 <20) {
//         alert(`В Вашей корзине ${number} товаров!`)
//
//     } else if (result >1 && result <5) {
//         alert(`В Вашей корзине ${number} товара!`)
//
//     } else if (result === 1 ) {
//         alert(`В Вашей корзине ${number} товар!`)
//
//     } else {
//         alert(`В Вашей корзине ${number} товаров!`)
//     }
// }
//
//  wordsDeclension();


// 5. Задача (Попадание точки в область)
// пользователь вводит x и y , если попал то выводим попал или не попал
//
// function schedule() {
//     const X = +prompt('Введите х (1-5) :');
//     const Y = +prompt('Введите y (1-5):');
//     if (X === 1 && Y === 5) {
//         alert('Вы попали в 1ю точку графика')
//
//     } else if (X === 2 && Y === 3) {
//         alert('Вы попали в 2ю точку графика')
//
//     } else if (X === 2 && Y === 3) {
//         alert('Вы попали в 3ю точку графика')
//
//     } else if (X === 3 && Y === 2) {
//         alert('Вы попали в 4ю точку графика')
//     } else if (X === 4 && Y === 4) {
//         alert('Вы попали в 5ю точку графика')
//     } else if (X === 2 && Y === 3) {
//         alert('Вы попали в 6ю точку графика')
//     } else if (X === 5 && Y === 1) {
//         alert('Вы попали в 7ю точку графика')
//     } else {
//         alert('Такой точки на графике нет. Попробуйте еще раз')
//     }
// }
//
// schedule();
