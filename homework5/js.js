const createBtn = document.querySelector('.btn');
const cardContainer = document.querySelector('.card-container');
const name = ['Stas', 'Dima', 'Petya', 'Vladik', 'Alesha', 'Valya', 'Nadya'];
const description = ['Love dicks', 'Hello world', 'Photoshooter', 'Shlyapa usataya', 'Prodavec ogurcov'];
let cards = [
    {
        name: 'Lyuba',
        img: 'https://random.imagecdn.app/500/500',
        description: 'Masaj prostati',
        id: 1
    }
];

createBtn.addEventListener('click', () => {
    cards = [...cards, getRandomCard()];
    cardRender();
});

function getRandomCard() {
    return {
        name: name[Math.floor(Math.random() * (name.length - 1)) + 1],
        img: getRandomImage(),
        description: description[Math.floor(Math.random() * (description.length - 1)) + 1],
        id: Math.floor(Math.random() * 1000)
    }
}

function getRandomImage() {
    return `https://random.imagecdn.app/500/500`
}

function removeCard(id) {
    cards = cards.filter(card => card.id !== id);
    cardRender()
}

function cardRender() {
    let result = '';

    for (let i = 0; i < cards.length; i++) {

        result += `<div class="card-wrapper"><div class="card">
            <p class="name">${cards[i].name}</p>
            <img class="img" src="${cards[i].img}">
            <p class="description">${cards[i].description}</p>
            <button onclick="removeCard(${cards[i].id})" class="btn-remove"></button>
        </div></div>`
    }

    cardContainer.innerHTML = result;
}

cardRender();