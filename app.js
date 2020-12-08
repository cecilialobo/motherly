const leftArrow = document.getElementById('btn-left');
const rightArrow = document.getElementById('btn-right');

let IndexOfCards = 0;

leftArrow.addEventListener('click', () => {
    swipeCardsToLeft();
})

rightArrow.addEventListener('click', () => {
    swipeCardsToRight();
})

const cards = [
    {img: 'assets/paula.jpg',
    text: 'Paula & Pedro <br> With the help of other moms from Motherly, me and Pedro were able to have an amazing experience with breastfeeding.'
    },

    {img: 'assets/anna.jpg',
    text: 'Anna & Olivia <br> I\'m very grateful for the women that helped me with Motherly, now it\'s my time to contribute.'
    },

    {img: 'assets/carolina.jpg',
    text: 'Carolina & Victor <br> To help other women is a very good feeling. I wish more and more women would contribute!'
    },

    {img: 'assets/lia.jpg',
    text: 'Lia & Harvey <br> Thank you Amanda (Motherly volunteer), the amazing friend that helped me when I needed the most.'
    }    
]

function swipeCardsToRight() {
    IndexOfCards = IndexOfCards + 1;
    console.log(IndexOfCards);

    if(IndexOfCards >= cards.length) {
        IndexOfCards = 0;
    }

    createCard(IndexOfCards);
}

function swipeCardsToLeft() {
    IndexOfCards = IndexOfCards - 1;
    console.log(IndexOfCards);

    if(IndexOfCards < 0) {
        IndexOfCards = 3;
    }

    createCard(IndexOfCards);
}

function createCard (IndexOfCards) {
    const cardImg = document.getElementById('img');
    cardImg.src = cards[IndexOfCards].img;

    const cardText = document.querySelector('.card-text');
    cardText.innerHTML = cards[IndexOfCards].text;
}