const cardContainer = document.querySelector('.card-container');
const addBtn = document.querySelector('.add');
let cards = [
    {
        name: 'Card Name',
        description: 'card description',
        id: 1


    }
];

addBtn.addEventListener('click', () => {
    cards = [...cards,getNewCard()];
    cardsRender()
});

function getNewCard() {
    return {
        name: 'Card Name',
        description: 'card description',
        picture: src="https://random.imagecdn.app/500/500",
        id: Math.floor(Math.random() * 10000)
    }
}


function cardsRender() {
    let result = '';
    for (let i = 0; i < cards.length; i++) {
        result += `<div class="card">
<p class="card__name">${cards[i].name}</p>
<p class="card__description">${cards[i].description}</p>
<img class="picture" src="https://random.imagecdn.app/500/500" alt="">
<button onclick="removeCard(${cards[i].id})" class="btn remove"></button>
</div>`

    }
cardContainer.innerHTML = result;
}

function removeCard(id) {
    cards = cards.filter(card => card.id !== id);
    cardsRender()
}

cardsRender();
