const containerCard = document.querySelector('.container_card');
const addBtn = document.querySelector('.add');
const cardWrapper = document.querySelector('.card_wrapper');
const name = ['Smotri','Vclube','Lays','Lyks','Kek'];
const description = ['Krasota','Chiksy','Crab','Paprika','Opachki']
let arrCards = [
    {
        name: 'Card Name',
        description: 'card description',
        id: 1,
        img: "https://random.imagecdn.app/500/500"

    }
];

addBtn.addEventListener('click', () => {
    arrCards = [...arrCards, getNewCard()];
    cardRender();

});

function getNewCard() {
    return {
        name: name[Math.floor(Math.random() * (name.length - 1)) + 1],
        description: description[Math.floor(Math.random() * (name.length - 1)) + 1],
        img: "https://random.imagecdn.app/500/500",
        id: Math.floor(Math.random() * 1000)


    }

}


function cardRender() {
    let result = '';
    for (let i = 0; i < arrCards.length; i++) {
        result += `<div class="card"> 
<div class="background"></div>
<p class="card_name">${arrCards[i].name}</p>
<p class="card_description">${arrCards[i].description}</p>
<img class='image' src="https://random.imagecdn.app/500/500" alt="">
<button onclick="deleteCard(${arrCards[i].id})" class="btn delete"></button>
</div>`
    }

    containerCard.innerHTML = result;
}

function deleteCard(id) {
    arrCards = arrCards.filter(addCards => addCards.id !== id);
    console.log(arrCards);
    cardRender();

}

cardRender();



