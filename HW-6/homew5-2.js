'use strict';
let beerData;
let page  = 1;
const cardsConatainer = document.querySelector('.cards-container');

document.querySelector('.btn')
        .addEventListener('click', myClick);


function myClick(){
    //console.log(document.querySelector('.input__value').value);
    return  document.querySelector('.input__value').value;
}

function getBeers(){
    //?beer_name=${myClick}
    const responseBeer = fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
        .then(response => response.json()).then((beerData) => beerData);

        responseBeer.then((beerData) => {
            console.log(beerData);
        cardRenders(beerData)
    })
}
getBeers();

function cardRenders(beerData){
    let cardsRes = "";

    beerData.forEach((card) =>  {
            cardsRes += `<div class="cards">
<img class="imag" src="${card.image_url}">
<p class="name">${card.name}</p>
<p class="description">${card.description}</p>
<p class="abv">${card.abv}<span>% alc</span></p>
<button class="btn__add">${addBeerToBask(card.id)}</button>
</div>`
    });

    cardsConatainer.innerHTML = cardsRes;
}

function addBeerToBask(id) {
    document.querySelector('.add')
        .addEventListener('click', () => {
            beerData.filter(beerData => beerData.id === id);
            console.log(beerData)
        })
}