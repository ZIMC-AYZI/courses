'use strict';

let cards = [
    {
        nameCard : "Ivan",
        image: `https://random.imagecdn.app/500/500`,
        descriptionName: 'Pizdorvan'
    }
];

function getRundom() {
    return {
        nameCard: nameArr[Math.floor(Math.random() * (nameArr.length-1)) + 1],
        image: `https://random.imagecdn.app/500/500`,
        descriptionName: descriptionArr[Math.floor(Math.random() * (descriptionArr.length - 1)) + 1],
    }
}

const btnAdd = document.querySelector('.add');
const cardsConatainer = document.querySelector('.cards-container');

const nameArr = ['Samozvanka', 'Pikachu', 'Sognuta', 'Seledka', 'Karalina', 'Sliva'];
const descriptionArr = ['Krasivoe', 'Potnoe', 'Eboy', 'Selitra', 'Pingvin', 'Lapata'];

btnAdd.addEventListener('click', () => {
cards = [...cards, getRundom()];
cardRender();
});

function cardRender() {
    let  res = '';
    for (let i = 0; i < cards.length; i++){
        res += `<div class="card">
<p class="name-card">${cards[i].nameCard}</p>
<img class="image" src="${cards[i].image}">
<p class="description-name">${cards[i].descriptionName}</p>
</div>`
    }
    cardsConatainer.innerHTML = res;
}

cardRender();