const button = document.querySelector('.button');
const cardField = document.querySelector('.wrapper');

let card = [
    {
        firstField: 'Dima Maslenikov',
        secondField: 'Name',
        thirdField: 'card',
        fourthField: 'description',
        id: 1
    }
]


function addNewCard() {
    cardField.innerHTML += `
    <div class="wrapper-card">
    <div class="background-card">
    <button class="move-element">
    <img class="btn" src="Icons.png" alt="">
    </button>
    <div class="card">
    <img class="img" src="https://random.imagecdn.app/500/500" alt="">
    <p class="name">Card name</p>
    <p class="description">card description</p>
    </div>
    </div>
</div>`
}

button.addEventListener('click', () => {
    addNewCard()
})


// <div class="fake-border">
//     <div class="background-card">
//     <button class="move-element">
//     <img class="btn" src="Icons.png" alt="">
//     </button>
//     <div class="card">
//     </div>
//     </div>
//     </div>


// <div class="card">
//                     <div class="img">
//                         <img class="image" src="https://images.unsplash.com/photo-1655365225170-55d6b7d2d6d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ3NDM5MA&ixlib=rb-1.2.1&q=80&w=500" alt="">
//                         <div class="description">
//                             <p class="deck-up up1">Card</p>
//                             <p class="deck-up up2">Name</p>
//                             <p class="deck-down down1">card</p>
//                             <p class="deck-down down2">description</p>
//                         </div>
//                         </div>
//                 </div>