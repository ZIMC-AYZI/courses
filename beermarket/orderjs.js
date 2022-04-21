const orderContainer = document.querySelector('.order');
const createOrder = document.querySelector('.createOrder');
let basketData = [];

if (localStorage.getItem('saveData')) {
    basketData = JSON.parse(localStorage.getItem('saveData'))
}

basketOrder();

createOrder.addEventListener('click', () => {
    console.log(123)
});

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