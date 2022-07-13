const button = document.querySelector('.button');
const cardField = document.querySelector('.wrapper');

let card = []

function getCard() {
    return {
        firstField: getRandomName(),
        secondField: getRandomSurname(),
        id: getRandomId()
    }
}

function getRandomName() {
    const name = ['Grisha', 'Pasha', 'Kolya', 'Vitya', 'Gena', 'Pavlik'];
    return name [Math.floor(Math.random() * (name.length - 1)) + 1]
}

function getRandomSurname() {
    const surname = ['Eldovoy', 'Podpechniy', 'Kukushkin', 'Clenoglotov', 'Mogilniy', 'Vodkin'];
    return surname [Math.floor(Math.random() * (surname.length - 1)) + 1];

}

function getRandomId() {
    return Math.floor(Math.random() * 1000)
}

function deleteCard(id) {
    card = card.filter(el => el.id !== id);
    cardRender()
}

function cardRender() {
    let result = ''
    for (let i = 0; i < card.length; i++) {
        result +=
            `<div class="wrapper-card">
    <div class="background-card">
    <div class="move-element">
    <button onclick="deleteCard(${card[i]['id']})" class="btn"></button>
    </div>
    <div class="card">
    <img class="img" src="https://random.imagecdn.app/500/500" alt="">
    <p class="name">${card[i]['firstField']}</p>
    <p class="description">${card[i]['secondField']}</p>
    </div>
    </div>
</div>`
    }
    cardField.innerHTML = result;
}

button.addEventListener('click', () => {
    card = [...card, getCard()];
    cardRender()
})
