const orderContainer = document.querySelector('.order');
const createOrder = document.querySelector('.createOrder');

if (localStorage.getItem('saveData')) {
    basketData = JSON.parse(localStorage.getItem('saveData'))
}

createOrder.addEventListener('click', () => {
    console.log(123)
});