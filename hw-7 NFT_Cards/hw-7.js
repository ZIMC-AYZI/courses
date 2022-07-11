const button = document.querySelector('.button');
const cardField = document.querySelector('.cards');

function addNewCard() {
cardField.innerHTML += `<div class="background-card">
                <div class="card">
                    <div class="img">
                        <img class="image" src="https://images.unsplash.com/photo-1655365225170-55d6b7d2d6d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ3NDM5MA&ixlib=rb-1.2.1&q=80&w=500" alt="">
                        <div class="description">
                            <p class="deck-up up1">Card</p>
                            <p class="deck-up up2">Name</p>
                            <p class="deck-down down1">card</p>
                            <p class="deck-down down2">description</p>
                        </div>
                        </div>
                </div>
            </div>`
}

button.addEventListener('click', () => {
addNewCard()})






