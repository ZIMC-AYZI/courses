const beerContainer = document.querySelector('.beer-container');
const input = document.querySelector('.input');
let beer = [];

// onscroll = function() {
//     if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight)
//         alert('Конец прокрутки');
// };

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

let page = 1;

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

        result += `<div class ="card">
<p class="name">${beer.name}</p>
<img class="img" src="${beer.image_url}">
<p class="description">${beer.tagline}</p>
</div>`
    });

    beerContainer.innerHTML = result;

}

(function() {
    let updateButton = document.getElementById('openDetails');
    let cancelButton = document.getElementById('cancel');
    let dialog = document.getElementById('favDialog');
    dialog.returnValue = 'favAnimal';

    function openCheck(dialog) {
        if(dialog.open) {
            console.log('Dialog open');
        } else {
            console.log('Dialog closed');
        }
    }

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function() {
        dialog.showModal();
        openCheck(dialog);
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
        dialog.close('animalNotChosen');
        openCheck(dialog);
    });

})();
