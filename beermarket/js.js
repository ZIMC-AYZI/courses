const beerContainer = document.querySelector('.beer-container');
const basketContainer = document.querySelector('.basket-container');
const input = document.querySelector('.input');
let beerData = [];
let basketData = [];
let page = 1;

if (localStorage.getItem('saveData')) {
    basketData = JSON.parse(localStorage.getItem('saveData'))
}

basketWindow();

function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        page += 1;
        getBeer()
    }
}

;(() => {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition)
})();

function getBeer(resetArray = false) {

    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10&beer_name=${searchName()}`)
        .then((response) => response.json())
        .then(beers => {
            beerData = resetArray ? beers : [...beerData, ...beers];
            beerRender();
        });

}

function searchName() {

    return input.value;

}

function beerRender() {
    let result = '';

    beerData.forEach((beer) => {

        result += `<div class="card-wrapper">
<div class ="card">
<div class="card-left"><img class="img" src="${beer.image_url}"></div>
<div class="card-right">
<p class="name">${beer.name}</p>
<p class="description">${beer.tagline}</p>\
</div>
</div>
${basketData.filter(item => beer.id === item.id).length ? `<button onclick="delBeer(${beer.id})" class="btn-del" title="Удалить из корзины"></button>` : `<button onclick="addBasket(${beer.id})" class="btn-add" title="Добавить в корзину"></button>`}
</div>`
    });

    beerContainer.innerHTML = result;

}

function basketWindow() {
    let updateButton = document.getElementById('openDetails');
    let cancelButton = document.getElementById('cancel');
    let container = document.getElementById('dialog');
    let resetButton = document.getElementById('reset');

    updateButton.addEventListener('click', function () {
        container.showModal();
        basketRender()
    });

    cancelButton.addEventListener('click', function () {
        container.close();
    });

    resetButton.addEventListener('click', () => {
        basketData = [];
        basketRender();
        localStorage.clear();
        beerRender()
    });



}

function addBasket(id) {

    const beerSelect = beerData.find((el) => el.id === id);
    basketData = [...basketData, beerSelect];
    beerRender();
    localStorage.setItem('saveData', JSON.stringify(basketData));

}

function delBeer(id) {
    basketData = basketData.filter(card => card.id !== id);
    localStorage.setItem('saveData', JSON.stringify(basketData));
    basketRender();
    beerRender()
}

function basketRender() {
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

    basketContainer.innerHTML = result;

}

// onscroll = function() {
//     if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight)
//         alert('Конец прокрутки');
// };