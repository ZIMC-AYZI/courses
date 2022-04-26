'use strict';
let beerDat;
let beerBasket = [];
let page  = 1;
let perPage = 10;

const cardsContainer = document.querySelector('.cards-container');

const myClick = () => {
    let input = document.querySelector('.input__value');
    return input.value
};

document.querySelector('.btn')
        .addEventListener('click', (e) => {
            showBasket('.bask__bask')
});

function showBasket (container) {
    const bask__bask = document.querySelector(container)
    bask__bask.style.display = 'block'
}

document.addEventListener('scroll', scrollAdd)//=> {
//     let seeScroll = document.documentElement.clientHeight;
//     let fullScroll = document.documentElement.scrollHeight;
//     let positionScroll = window.pageYOffset;
//     let positionScroll1 = document.documentElement.scrollTop;
//
//
//     let partOffSeeScroll = 3;
//
//     let maxPosForPositionScroll = fullScroll - seeScroll;
//     let a = maxPosForPositionScroll - (seeScroll/partOffSeeScroll)
//     if (window.pageYOffset > a){
//         page++;
//         perPage +=10;
//         getBeers();
//     }
// });

function scrollAdd () {
    let seeScroll = document.documentElement.clientHeight;
    let fullScroll = document.documentElement.scrollHeight;

    let partOffSeeScroll = 6;

    let maxPosForPositionScroll = fullScroll - seeScroll;
    let a = maxPosForPositionScroll - (seeScroll/partOffSeeScroll)
    if (window.pageYOffset > a){
        page++;
        perPage++;
        console.log(perPage)
        getBeers();
    }
    console.log(`${maxPosForPositionScroll}  // ${window.pageYOffset} // ${fullScroll} / ${a}`)
}

function getBeers () {
    // const responseBeer = fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10&beer_name=${myClick()}`)
    //     .then(response => response.json()).then((beerData) => beerData);
    //
    //     responseBeer.then(beerData => {
    //         beerDat = [...beerData]
    //        console.log(beerDat);
    //     cardRenders(beerData)
    // })
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}&beer_name=${myClick()}`)
        .then(response => response.json())
        .then(beerSort => {
            beerDat = [...beerSort];
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
<button onclick ="addBeerToBask(${beerSort.id})" class="btn__add"></button>
</div>`
    });
    cardsContainer.innerHTML = cardsRes;
}

function addBeerToBask(id) {
    beerBasket = [...beerDat.filter(card => card.id === id), ...beerBasket];
}
function cardBasketRenders () {
    let cardsRes = "";

    beerBasket.forEach((beerSort) => {

        cardsRes += `<div class="cards">
<img class="imag" src="${beerSort.image_url}">
<p class="name">${beerSort.name}</p>
<p class="description">${beerSort.description}</p>
<p class="abv">${beerSort.abv}<span>% alc</span></p>
<button onclick ="addBeerToBask(${beerSort.id})" class="btn__add"></button>
</div>`
    });
    cardsContainer.innerHTML = cardsRes;
}

