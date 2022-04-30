'use strictl';

let beerBasket = [];
let basket = document.querySelector('.oder-list');



let oderList = {
    name: nameValue(),
    surName: surNameValue(),
    secondName: secondNameValue(),
    phone: phoneValue(),
    oder: []
};

function nameValue() {
    let input = document.querySelector('.name');
    return input.value
}

function surNameValue() {
    let input = document.querySelector('.sur-name');
    return input.value
}

function secondNameValue() {
    let input = document.querySelector('.second-name');
    return input.value
}

function phoneValue() {
    let input = document.querySelector('.phone');
    return input.value;
}

document.querySelector('.finale-btn')
        .addEventListener('click', () => {
         oderList = {
                name: nameValue(),
                surName: surNameValue(),
                secondName: secondNameValue(),
                phone: phoneValue(),
                oder: beerBasket
         };
           localStorage.clear() ;
          console.log(oderList);
          return oderList
});

beerBasket = JSON.parse(localStorage.getItem('tovar'));

function deleteBeer(id) {
    beerBasket = beerBasket.filter(card => card.id !== id);
    localStorage.setItem('tovar', JSON.stringify(beerBasket));
    beerBasket = [...cardRender(), ...beerBasket];
}

function cardRender() {
    res = "";

    beerBasket.forEach((beer) => {
        res += `<div class="card">
<p class="name-beer">${beer.name}</p>
<button class="delete-btn" onclick="deleteBeer(${beer.id})">Видалити</button>
</div>`
    });


    basket.innerHTML = res;
}
//<button class="delete-btn">Видалити</button>\
cardRender();