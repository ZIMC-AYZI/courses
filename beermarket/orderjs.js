const orderContainer = document.querySelector('.order');
const createOrder = document.querySelector('.createOrder');
const inputName = document.querySelector('.inputName');
const inputSoname = document.querySelector('.inputSoname');
const inputPatronymic = document.querySelector('.inputPatronymic');
const inputNumber = document.querySelector('.inputNumber');
let basketData = [];
let readyOrder = {};

if (localStorage.getItem('saveData')) {
    basketData = JSON.parse(localStorage.getItem('saveData'))
}

basketOrder();

function searchName() {
    return inputName.value;
}

function searchSoname() {
    return inputSoname.value;
}

function searchPatronymic() {
    return inputPatronymic.value;
}

function searchNNumber() {
    return inputNumber.value;
}

function delBeer(id) {
    basketData = basketData.filter(card => card.id !== id);
    localStorage.setItem('saveData', JSON.stringify(basketData));
    basketOrder();
}

function basketOrder() {
    let result = '';

    basketData.forEach((beer) => {

        result += `<div class="card-wrapper">
<div class ="card">
<div class="card-left"><img class="img" src="${beer.image_url}"></div>
<div class="card-right">
<p class="name">${beer.name}</p>
<p class="description">${beer.tagline}</p>
</div>
</div>
<button onclick="delBeer(${beer.id})" class="btn-del" title="Удалить из корзины"></button>
</div>`
    });

    orderContainer.innerHTML = result;

}

createOrder.addEventListener('click', () => {
    readyOrder = {
        name: searchName(),
        second_name: searchSoname(),
        last_name: searchPatronymic(),
        phone: searchNNumber(),
        order: basketData
    };

    return console.log(readyOrder)
});