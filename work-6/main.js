
let usersData;

const responseData = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()).then((users) => users);

responseData.then((data) => {
  usersData = data;
  // setInterval(() => test(), 1000)
})

const cont = document.querySelector('.container');
// let imgUrl = 'https://random.imagecdn.app/500/500';

function test() {
  // imgUrl = 'https://random.imagecdn.app/500/500'
  const img = new Image();
  img.src = 'https://random.imagecdn.app/500/500'
  const randomIdx = Math.floor(Math.random() * 10);
  // console.log(randomIdx);
  console.log(usersData[randomIdx].name);

  cont.innerHTML += `<img src="${img.src}" alt="img">`
  // imgUrl = null;
}
//
// responseData.then((images) => {
//   renderUsersList(images)
// });
//
// const container = document.querySelector('.container');
//
// function renderUsersList(images) {
//   let template = '';
//
//   images.forEach((image) => {
//     template += `<img src="${ image.url }"/>`
//   });
//
//   container.innerHTML = template;
// }


// console.log(1);
// console.log(2);
// console.log(3);
// promise1.then((data) => console.log(data, 'data'));
// let user = null;

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: 'Stas',
//       count: 15
//     })
//   }, 2000)
// });
//
// function getBonusForUser(user) {
//   console.log(user.count += 25, user);
// }
//
// getUser.then((user) => getBonusForUser(user))
// name.com
// gender.com
// const user = {};
//
// function createUser() {
//   // console.log('ждите сейчас узнаем идиот он или нет');
//
//   getNameFromServer().then((name) => {
//     user.name = name;
//   });
// }
//
// function getNameFromServer() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('get NAME from SERVER SUCCESS');
//       getGenderFromServer().then((gender) => {
//         console.log('ALL USER IS CREATED');
//         user.gender = gender;
//         console.log(user, 'user')
//       });
//
//       res('Andrey');
//     }, 1000);
//   })
// }
//
// function getGenderFromServer() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('get GENDER from SERVER SUCCESS');
//       res('Male');
//     }, 4000)
//   })
// }
//
// createUser();
// // test({name: 'stas'});
//
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: 'Stas',
//       count: 15
//     })
//   }, 2000)
// });
