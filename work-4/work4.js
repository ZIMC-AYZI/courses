// console.log(1, 'first');
// setTimeout(() => console.log(2, 'second TIMEOUT'), 100);
// console.log(3, 'third');
// setTimeout(() => console.log(4, 'fourth TIMEOUT'), 0);
// console.log(5, 'fifth');

// GETTERS
// SETTERS

// class Weapon {
//   constructor(name, damage , range , airSpeed , prodCountry = '', damageRadius ) {
//     this.name = name;
//     this.damage = damage;
//     this.range = range;
//     this.airSpeed = airSpeed;
//     this.prodCountry = prodCountry;
//     this.damageRadius = damageRadius;
//   }
//
//   get getInfo() {
//     const information = {
//       weaponName: this.name,
//       importFrom: this.prodCountry,
//       rangeDistance: `${this.range}  km`,
//       speed: `${this.airSpeed} km/h`,
//       radius: `${this.damageRadius} km`
//     };
//
//     console.log(information)
//   }
//
//   set updateRage(newRange) {
//     this.range = newRange;
//     console.log('range updated');
//   }
//
//   launch(distance) {
//     return distance > this.range ?
//       console.log({ error: `Range is too long for ${this.name}`}) :
//       this.timeForDie(distance);
//   }
//
//   timeForDie(distance) {
//     let timeToDIe = parseInt(distance / this.airSpeed);
//     let isLaunched = false;
//
//     let interval = setInterval(function(){
//       timeToDIe -= 1;
//       if(timeToDIe <= 0){
//         clearInterval(interval);
//         console.log('Russian pigs die');
//       }
//
//       if (!isLaunched) {
//         isLaunched = true;
//         console.log(`${this.name} launched, Russian dog-pigs will be die in ${timeToDIe}`);
//       } else {
//         console.log(timeToDIe);
//       }
//     }, 1000);
//   }
//
// }
//
// const bayRaktar = new Weapon('Bayraktar', 1400, 4000, 60, 'Turkey', 50);
// // bayRaktar.updateRage = 600;
// bayRaktar.getInfo

// bayRaktar.launch(1000);
// bayRaktar.getInfo
//
// // const nowLao = new Weapon('NoLao', 1000, 1000, 100, 'USA', 400);
// // nowLao.getInfo
// // nowLao.launch(300);
//
// class atomWeapon extends Weapon {
//   constructor(name, damage) {
//     super(name, damage);
//   }
//
//   finishEarth() {
//     console.log('finish earth');
//   }
//
//   get getInfo() {
//     super.getInfo;
//     console.log('INFORMATION GETTED')
//   }
// }
//
//
//
//
// const atomRocket = new atomWeapon('atom-rocket', 600);
// // atomRocket.finishEarth();
// atomRocket.getInfo;
//
//
// class Pistol {
//   constructor(weight, color, country) {
//     this.weight = weight;
//     this.color = color;
//     this.country = country;
//   }
//
//   get getInfo() {
//     console.log({
//       weight: this.weight,
//       color: this.color,
//       country: this.country,
//       damage: this.damage,
//       range: this.range
//     })
//   }
//
//   setDetailInfo(damage, range) {
//     this.damage = damage;
//     this.range = range
//   }
// }
//
// class DesertEagle extends Pistol {
//   constructor(weight, color, country) {
//     super(weight, color, country);
//   }
// }
//
// const blackDesertEagle = new DesertEagle(10, 'black', 'USA');
// blackDesertEagle.setDetailInfo(400, 1000);
// blackDesertEagle.getInfo

// const homePageModal = {
//   title: 'asd',
//   headerText: 'asdasd',
//   footerText: 100,
//   close() {
//     console.log('modal closed')
//   },
//   pcTurnOff() {
//     console.log('bye bye')
//   }
// };

// class ModalWindow {
//   constructor(title, headerText, footerText, content) {
//     this.title = title;
//     this.headerText = headerText;
//     this.footerText = footerText;
//     this.content = content;
//   }
//
//   close() {
//     this.isClose = true;
//   }
// }
//
// class GalleryModal extends ModalWindow {
//   constructor(title, headerText, footerText, content, gallery) {
//     super(title, headerText, footerText, content);
//     this.gallery = gallery;
//   }
//
//   renderImages() {
//     console.log(this.gallery, 'LALALA')
//   }
// }
//
// const imgArray = ['asd', 'asd']
// const homePageModal = new GalleryModal('asd','asd','asd','asd',imgArray);
// homePageModal.renderImages();

// 1 - не всплывает

// const inlineFunc = (number) => {  // это две идентичные функции
//   return number;
// }

// const inlineFunc = (number) => number;
//
// console.log(inlineFunc(10), 'inlineFunc(10)');

// function abc() {
//
// }
//
// abc();

// console.log(name(), ' -> name function work');

// function name() {
//   return 'returned string';
// }

// const name = (name, secondName) => name + secondName;
// const name = (name, secondName) => {
//   return name + secondName;
// }
// console.log(name('Ba', 'Lo'), ' -> name function work');



// 2 - потеря контекста this

// const person = {
//   name: 'Vanya',
//   second_name: 'Petrov',
//
//   personSayFullName() {
//     // this === person
//     console.log(person.name, 'person.name');
//     console.log(this.name, 'this.name');
//     return this.name + ' ' + this.second_name;
//   },
//
//   showThis() {
//     return this;
//   }
// };
//
// console.log(person, 'person');
// // console.log(person.name, person.second_name, 'imya familiya');
// console.log(person.personSayFullName(), '-> personSayFullName imya familiya');
// console.log(person.showThis(), '-> personSayFullName imya familiya');


                                                          // ARROW FUNCTION
                                                    // Стрелочная функция не всплывает ( нельз вызвать до ее обьявления )
                                                    // Стрелочная функция не имеет своего контекста ( this будет равен undefined )

// const arrowFunc = (num) => num * 2;
                                                        // FUNCTION DECLARATIONS (!!!Всегда со словом function )
                                            // задекларированая функция всплывает, можно вызвать до ее обьявления
                                      // у функции declaration есть свой контекст и он всегда будет равен ее родителю на момент вызова
// function declarationFunc(num) {
//   return num * 2
// }


// const user = {
//   name: 'Stas',
//   surname: 'Avorov',
//   arrowName: () => console.log(this.name, this.surname),  // ВЕРНЕТ UNDEFINED , у стрелочной функции нету контекста this!
//   declarationName() {
//     console.log(this.name, this.surname)         // ВЕРНЕТ поля имени и фамилии
//   }
// }

// user.arrowName();
// user.declarationName();

                                      // МЕТОДЫ ПРИВЯЗКИ КОНТЕКСТА ( THIS )

// function getNameFromDifferentUsers() {          // Функция которая возвращает поле name и surname текущего контекста ( this )
//   console.log(this.name, this.surname);        // НУЖНА ДЛЯ ПЕРЕИСПОЛЬЗОВАНИЯ ПО РАЗНЫМ ОБЬЕКТАМ
// }
//
// const dima = {
//   name: '1',
//   surname: 's1',
//   message: 'dima privet'
// }
//
// const dog = {
//   name: '2',
//   surname: 's2',
//   message: 'gav-gav',
//   getVoice() {
//     return this.message;
//   }
// }
//
// function changeMessage() {
//
// }
//
// console.log(dog.getVoice.call(dima));
// console.log(dog);

// getNameFromDifferentUsers.call(user1);  // МЕТОД CALL , принимает в себя обьект по которому будет работать , вызываеться сам
// getNameFromDifferentUsers.call(user2);  // МЕТОД CALL , принимает в себя обьект по которому будет работать , вызываеться сам


// getNameFromDifferentUsers.apply(user1);  // МЕТОД APPLY , принимает в себя обьект по которому будет работать , вызываеться сам
// getNameFromDifferentUsers.apply(user2);  // МЕТОД APPLY , принимает в себя обьект по которому будет работать , вызываеться сам


// getNameFromDifferentUsers.bind(user1)();  // МЕТОД BIND , принимает в себя обьект по которому будет работать , Нужен ВЫЗОВ
// getNameFromDifferentUsers.bind(user2)();  // МЕТОД BIND , принимает в себя обьект по которому будет работать , Нужен ВЫЗОВ

// FUNCTION DECLARATION
// function declarationFunc() {
//   console.log(...arguments, 'declaration');
// }


// FUNCTION EXPRESSION
// const test = () => {
//   console.log(...arguments, 'arrow func')
// };


// declarationFunc(1,2,3,4,5);
//
// test(1,2,3,4,5);
