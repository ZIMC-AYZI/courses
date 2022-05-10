'use strict';
let beerDat;
let beerBasket = [];
let page = 1;
let countBeer = 0;

const cardsContainer = document.querySelector('.cards-container');
const cardBasketContainer = document.querySelector('.card-basket-container');

const myClick = () => {

    let input = document.querySelector('.input__value');
    if (input.value === ''){
        alert('ведите значение')
    }else {
        return input.value
    }
};

document.querySelector('.btn')
        .addEventListener('click', () => {
            if (myClick()){
                showBasket('.bask__btn')
            }

        });

function showBasket (container) {

    const bask__btn = document.querySelector(container);
    bask__btn.style.display = 'block'
}
document.addEventListener('load', cardRenders ); //DOMContentLoaded, load
document.addEventListener('scroll', scrollAdd);

function scrollAdd () {
    let seeScroll = document.documentElement.clientHeight;
    let fullScroll = document.documentElement.scrollHeight;
    let allPage = window.pageYOffset;

    let partOffSeeScroll = 6;

    let auxiliaryPart = Math.floor(seeScroll/partOffSeeScroll) ;
    let pointForNextPage =  Math.floor(fullScroll - seeScroll - auxiliaryPart) ;
    if (allPage >= pointForNextPage) {
        page++;
        console.log(page);
        getBeers();
    }

}

function getBeers (isSelected = false) {
    //--------------------//\\ Это не удаляю как пример еще одного рабочего метода-----
    //--------------------------------    --------   --------   ------------   --------
    // const responseBeer = fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10&beer_name=${myClick()}`)
    //     .then(response => response.json()).then((beerData) => beerData);
    //
    //     responseBeer.then(beerData => {
    //         beerDat = [...beerData]
    //        console.log(beerDat);
    //     cardRenders(beerData)
    // })
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10&beer_name=${myClick()}`)
            .then(response => response.json())
            .then(beerSort => {
                beerDat = isSelected ? beerSort : [...beerDat,...beerSort];
            cardRenders();
        })
}

function cardRenders () {
    let cardsRes = "";

    beerDat.forEach((beerSort) => {

        cardsRes += `<div class="cards">
<img class="imag" src="${beerSort.image_url}">
<p class="name">${beerSort.name}</p>
<p class="description">${beerSort.description}</p>
<p class="abv">${beerSort.abv}<span>% alc</span></p>  
${beerBasket.filter(item => beerSort.id === item.id).length ? `<button onclick ="deleteBeerFromBask(${beerSort.id})" class="btn__delete" ></button>` : `<button onclick ="addBeerToBask(${beerSort.id})" class="btn__add"></button>`}
</div>`
    });

    cardsContainer.innerHTML = cardsRes;
}

function addBeerToBask(id) {
    beerBasket = [...beerDat.filter(card => card.id === id), ...beerBasket];
    localStorage.setItem('tovar', JSON.stringify(beerBasket));
    cardRenders();
    updateCount(++countBeer);
}

function updateCount(value) {
    document.querySelector('.text__count').innerHTML = value;
}

function deleteBeerFromBask(id) {
    beerBasket = beerBasket.filter(card => card.id !== id);
    beerBasket = [...beerBasket];
    localStorage.setItem('tovar', JSON.stringify(beerBasket));
    updateCount(--countBeer);
    //beerDat = beerDat.filter(card => card.id !== id);
    //beerDat = [...beerDat];
    cardRenders();
    cardBasketRenders()

}
document.querySelector('.bask__btn')
        .addEventListener('click', () => {
            showBasketModal('.bask-card-container');

            cardBasketRenders();
            console.log(beerBasket)
        });

function showBasketModal (container) {
    const bask__btn = document.querySelector(container);
    bask__btn.style.display = 'block';
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
        bask__btn.style.display = 'none';
        overlay.remove();
    })


}


function cardBasketRenders () {
    let cardsRes = "";

    beerBasket.forEach((beerSort) => {

        cardsRes += `<div class="card-basket">
<img class="imag" src="${beerSort.image_url}">
<p class="name">${beerSort.name}</p>
<p class="description">${beerSort.description}</p>
<p class="abv">${beerSort.abv}<span>% alc</span></p>
<button  class="btn__delete" onclick ="deleteBeerFromBask(${beerSort.id})"></button>
</div>`
    });
    cardBasketContainer.innerHTML = cardsRes;
}
