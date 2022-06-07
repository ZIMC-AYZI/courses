const inputSurname = document.querySelector('.input_surname');
const inputName = document.querySelector('.input_name');
const inputSecondName = document.querySelector('.input_second_name');
const inputPhoneNumber = document.querySelector('.input_phone_number');
const makeOrder = document.querySelector('.make_order');
const stashContainer = document.querySelector('.local__stash__container');


let stashCard = [];


let client = [ {
    surname: '',
    name: '',
    second_name:'',
    phone_number:'',
    order: []

}];

makeOrder.addEventListener('click', () => {
    client.surname = inputSurname.value;
    client.name = inputName.value;
    client.second_name = inputSecondName.value;
    client.phone_number = inputPhoneNumber.value;
    console.log(client);
});

stashCard = JSON.parse(localStorage.getItem('storage'));
function stashRender() {
    let result = '';
    stashCard.forEach((beer) => {
        result += `<div class="local_card">
<p class="local_card__name__stash">${beer.name}</p>
<p class="local_card__description__stash">${beer.abv}</p>
<img class="local_picture__stash" src="${beer.image_url}" alt="">
<button onclick="removeCard(${beer.id})" class="local__remove">Remove</button>
</div>`

    });
    stashContainer.innerHTML = result;
}
stashRender();

function removeCard(id) {
    stashCard = stashCard.filter(card => card.id !== id);
    stashCard = [...stashCard];
    localStorage.setItem('storage', JSON.stringify(stashCard));
    stashRender();


}
console.log(stashCard);


