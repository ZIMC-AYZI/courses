const cardContainer = document.querySelector('.card-container');
const searchBtn = document.querySelector('.btn-search');
const apiUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=10";

let beerCards = [];

function getBeer () {
fetch(apiUrl)
    .then((responce) => responce.json())
    .then(cards => {
        beerCards = cards;
        // console.log(beerCards)
    });



}
getBeer();

searchBtn.addEventListener('click', () => {
    cardsRender()

});

// name: "Buzz"
// abv: 4.5
// image_url: "https://images.punkapi.com/v2/keg.png"

function cardsRender() {
    let result = '';
    for (let i = 0; i <= beerCards.length; i++) {
        result += `<div class="card">
<p class="card__name">${beerCards[i].name}</p>
<p class="card__description">${beerCards[i].description}</p>
<img class="picture" src="${beerCards[i].image_url}" alt="">
<button onclick="removeCard(${cards[i].id})" class="btn remove"></button>
</div>`

    }
    cardContainer.innerHTML = result;
}
console.log(result);

function removeCard(id) {
    cards = cards.filter(card => card.id !== id);
    cardsRender()
}

cardsRender();
//
// //
// searchBtn.addEventListener('click', () => {
//     cards = [...cards,getNewCard()];
//     cardsRender()
// });
//
// function getNewCard() {
//     return {
//         name: 'Card Name',
//         description: 'card description',
//         picture: src="https://random.imagecdn.app/500/500",
//         id: Math.floor(Math.random() * 10000)
//     }
// }
//
//
// function cardsRender() {
//     let result = '';
//     for (let i = 0; i < cards.length; i++) {
//         result += `<div class="card">
// <p class="card__name">${cards[i].name}</p>
// <p class="card__description">${cards[i].description}</p>
// <img class="picture" src="https://random.imagecdn.app/500/500" alt="">
// <button onclick="removeCard(${cards[i].id})" class="btn remove"></button>
// </div>`
//
//     }
//     cardContainer.innerHTML = result;
// }
//
// function removeCard(id) {
//     cards = cards.filter(card => card.id !== id);
//     cardsRender()
// }
//
// cardsRender();
