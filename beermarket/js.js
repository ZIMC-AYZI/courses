const beerContainer = document.querySelector('.beer-container');
const basketContainer = document.querySelector('.basket-container');
const input = document.querySelector('.input');
let beer = [];
let page = 1;

async function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        page+=1;
        await getBeer()
    }
}

;(() => {
    window.addEventListener("scroll", checkPosition)
    window.addEventListener("resize", checkPosition)
})();

async function getBeer() {

    fetch(`https://api.punkapi.com/v2/beers?page=${ page }&per_page=10&beer_name=${ searchName() }`)
        .then((response) => response.json())
        .then(beers => {
            beer = [...beer, ...beers];
            beerRender();
        });

}

function searchName() {
    return input.value;
}

function beerRender() {
    let result = '';

    beer.forEach((beer) => {

        result += `<div class="card-wrapper">
<div class ="card">
<p class="name">${beer.name}</p>
<img class="img" src="${beer.image_url}">
<p class="description">${beer.tagline}</p>
<button class="btn-add" title="Добавить в корзину"></button>
</div>
</div>`
    });

    beerContainer.innerHTML = result;

}

function basketWindow() {
    let updateButton = document.getElementById('openDetails');
    let cancelButton = document.getElementById('cancel');
    let container = document.getElementById('dialog');

    updateButton.addEventListener('click', function() {
        container.showModal();
    });

    cancelButton.addEventListener('click', function() {
        container.close();
    });
}










// onscroll = function() {
//     if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight)
//         alert('Конец прокрутки');
// };