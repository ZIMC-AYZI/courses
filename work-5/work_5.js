// МАССИВ СО СПИСКОМ ПОЛЬЗОВАТЕЛЕЙ
let users = [
  {
    name: 'Stas',
    surname: 'Bylkinov',
    id: 1,
    isEditActive: false
  }
];

// MOC МАССИВ ИМЕН И ФАМИЛИЙ + ГЕНЕРАТОР РАНДОМНОГО Пользователя
const names = ['Andrey', 'Vitya', 'Stas', 'Dima', 'Ochko', 'Yablona'];
const surnames = ['Nyhov', 'Sobytilnikov', 'Ochedlov', 'Podlobkoviy', 'Zybatrasov', 'Bezglaziy'];

function getRandomUser() {
  return {
    name: names[Math.floor(Math.random() * (names.length - 1)) + 1],
    surname: surnames[Math.floor(Math.random() * (surnames.length - 1)) + 1],
    id: Math.floor(Math.random() * 1000),
    isEditActive: false
  }
}

// НАШИ HTML КНОПКИ И КОНТЕЙНЕРЫ
const usersContainer = document.querySelector('.users-container');
const addBtn = document.querySelector('.add');


// ДОБАВЛЕНИЕ ОБРАБОТЧИКА на Добавление пользователя в массив users
addBtn.addEventListener('click', () => {
  console.log('add');
  users = [...users, getRandomUser()];
  // ето аналог вышестоящий строки ( оператора SPREAD) users.push(getRandomUser())
  usersRender();
});

// УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ
function removeUser(id) {
  users = users.filter(user => user.id !== id);
  usersRender();
}

// Включить Редактирование Юзера ( поля isEditActive сменить на true/false )
function editUser(id, isDone = false) {
  users = users.map(user => {
    if (user.id === id) {
      user.isEditActive = !isDone;
    }

    return user;
  });

  usersRender();
}

// Редактирование Имени пользователя
function changeUserName(value, id) {
  users = users.map(user => {
    if (user.id === id) {
      user.name = value
    }

    return user;
  });
}

// Редактирование Фамилии пользователя
function changeUserSecondName(value, id) {
  users = users.map(user => {
    if (user.id === id) {
      user.surname = value
    }

    return user;
  });
}

// Рендер ( создания шаблона для отрисовки в html ) проход по массиву юзеров и рендер темплейта
function usersRender() {
  console.log('RENDER')
  let result = '';

  for (let i = 0; i < users.length; i++) {

    result += `<div class="user ${ users[i].isEditActive ? 'active' : '' }">
<p class="name">${ users[i].name }</p>
<p class="surname">${ users[i].surname }</p>
<button onclick="removeUser(${ users[i].id })" class="btn remove">remove</button>
<button onclick="editUser(${ users[i].id })" class="btn edit">edit</button>
<div class="user-container">
<input onchange="changeUserName(this.value, ${ users[i].id })" value="${ users[i].name }" type="text" placeholder="firstName">
<input onchange="changeUserSecondName(this.value, ${ users[i].id })" value="${ users[i].surname }" type="text" placeholder="secondName">
<div onclick="editUser(${ users[i].id }, true)" class="done"></div>
</div>
</div>`
  }

  usersContainer.innerHTML = result;
}


// вызов рендера в момент первого открытия страницы
usersRender();
