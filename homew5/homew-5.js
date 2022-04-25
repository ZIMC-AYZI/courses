'use strict';

let cards = [
    {
        nameCard : "Ivan",
        image: `https://random.imagecdn.app/500/500`,
        descriptionName: 'Pizdorvan',
        id: 1
    }
];

function getRundom() {
    return {
        nameCard: nameArr[Math.floor(Math.random() * (nameArr.length-1)) + 1],
        image: getImg(),//`https://random.imagecdn.app/500/500`,
        descriptionName: descriptionArr[Math.floor(Math.random() * (descriptionArr.length - 1)) + 1],
        id: Math.floor(Math.random() * 1000)
    }
}

const btnAdd = document.querySelector('.add');
const cardsConatainer = document.querySelector('.cards-container');

const nameArr = ['Samozvanka', 'Pikachu', 'Sognuta', 'Seledka', 'Karalina', 'Sliva'];
const descriptionArr = ['Krasivoe', 'Potnoe', 'Eboy', 'Selitra', 'Pingvin', 'Lapata'];

btnAdd.addEventListener('click', () => {
cards = [...cards, getRundom()];
cardRender();
})

function deleteCards(id) {
    cards = cards.filter(cards => cards.id !== id);
    cardRender();
}

function getImg() {
    const url = new URL(`https://random.imagecdn.app/500/500`)
    return url

}

function cardRender() {
    let  res = '';
    for (let i = 0; i < cards.length; i++){
        res += `<div class="card">
<img class="image" src="${cards[i].image}">
<p class="name-card">${cards[i].nameCard}</p>
<p class="description-name">${cards[i].descriptionName}</p>
<button onclick="deleteCards(${cards[i].id})" class="btn-dele"></button>
</div>`
    }
    cardsConatainer.innerHTML = res;
}

cardRender();

// let bulbs =[
//     {
//         width: 90,
//         height: 90,
//         position: absolute,
//         left: 364,
//         top: 434
//     }
// ];
//
// function getRandomDiapason(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max -min + 1)) + min;
// }
//
// function getRandomBulbs() {
//     const widthAndHeight = getRandomDiapason(10, 90);
//     return {
//         width: widthAndHeight,
//         height: widthAndHeight,
//         position: absolute,
//         left: getRandomDiapason(20, 1220),
//         top: getRandomDiapason(10, 450)
//     }
//
// }
//
// function bulbRender() {
//     let res = "";
//     bulbs.length = 10;
//     for (let i = 0; i < bulbs.length; i++ ){
//         res += `<div class="bulb">
// <img class="bulb1" src="${bulbs[i].}">
// </div>>`
//     }
// }