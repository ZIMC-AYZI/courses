const cardContainer = document.querySelector('.card-container');
const searchBtn = document.querySelector('.btn-search');
const input = document.querySelector('.input-search');
const apiUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=9";
const modal = document.querySelector('.modal');
const stashBtn = document.querySelector('.btn-stash');
const closeStash = document.querySelector('.close-stash');
const stashContainer = document.querySelector('.card-wrapper');


let beerCards = [];
let stashCard = [];

function getBeer(bulev = false) {

    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=8&beer_name=${searchBeer()}`)
        .then((responce) => responce.json())
        .then(cards => {
            beerCards = bulev ? cards : [...beerCards, ...cards];


            cardRender()
        });


}

searchBtn.addEventListener('click', () => {
    getBeer(true);
});

function searchBeer() {
    return input.value
}

stashBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeStash.addEventListener('click', () => {
    modal.style.display = 'none';
});


function cardRender() {
    let result = '';
    beerCards.forEach((beer) => {
        result += `<div class="card">
<p class="card__name">${beer.name}</p>
<p class="card__description">${beer.abv}</p>
<img class="picture" src="${beer.image_url}" alt="">
${stashCard.filter(item => beer.id === item.id).length ? `<button onclick="removeCard(${beer.id})" class="remove">-</button>` : `<button onclick="addCard(${beer.id})" class="add">+</button>`}

</div>`
    });
    cardContainer.innerHTML = result;
}


function addCard(id) {
    let beer = beerCards.filter(element => element.id === id);
    stashCard = [...stashCard, ...beer];
    localStorage.setItem('storage', JSON.stringify(stashCard));
    stashRender();
    cardRender();


}

function stashRender() {
    let result = '';
    stashCard.forEach(beer => {
        result += `<div class="card__stash">
<p class="card__name__stash">${beer.name}</p>
<p class="card__description__stash">${beer.abv}</p>
<img class="picture__stash" src="${beer.image_url}" alt="">
<button onclick="removeCard(${beer.id})" class="remove_stash">-</button>
</div>`

    });
    stashContainer.innerHTML = result;
}


function removeCard(id) {
    stashCard = stashCard.filter(card__stash => card__stash.id !== id);
    stashCard = [...stashCard];
    localStorage.setItem('storage', JSON.stringify(stashCard));
    stashRender();
    addCard()
}

let page = 1;
document.addEventListener('load', cardRender);
document.addEventListener('scroll', scroll);

function scroll() {

    let pointOfNextPage = document.documentElement.scrollHeight - document.documentElement.clientHeight ;
    if (pageYOffset >= pointOfNextPage) {
        getBeer()
    }

}