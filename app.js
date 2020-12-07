const cards = [
    {src = 'paula.jpg',
    text = 'Paula & Pedro <br> With the help of other moms from Motherly, me and Pedro were able to have an amazing experience with breastfeeding.'
    },

    {src = 'anna.jpg',
    text = 'Anna & Olivia <br> I\'m very grateful for the women that helped me with Motherly, now it\'s my time to contribute.'
    },

    {src = 'carolina.jpg',
    text = 'Carolina & Victor <br> To help other women is a very good feeling. I wish more and more women would contribute!'
    },

    {src = 'lia.jpg',
    text = 'Lia & Harvey <br> Thank you Amanda (Motherly volunteer), the amazing friend that helped me when I needed the most.'
    }    
]

function nextEvent() {
    indexOfCards = indexOfCards + 1;

    if(indexOfCards < cards.length-1) {
    const cardImg = document.querySelector('card-img-top');
    cardImg.innerHTML = cards[indexOfCards].src;
    
    const cardText = document.querySelector('card-text');
    cardText.innerHTML = cards[indexOfCards].text;

    } else {
        return
    }
}