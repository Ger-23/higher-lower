// Code will execute once page has loaded

document.addEventListener("DOMContentLoaded", function () {

    // Declare constants for DOM elements

    const displayCard = document.getElementById('display-card');
    const higherButton = document.getElementById('button1');
    const lowerButton = document.getElementById('button2');
    const playerScore = document.getElementById('score');
    let score = 0;

    /** Generates random card */

    function randomCard() {
        let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        let randomSuit = suits[Math.floor(Math.random() * suits.length)];
        let randomValue = Math.floor(Math.random() * 14) + 1;
        return {
            TL: `assets/images/${randomSuit}_${randomValue}.png`,
            value: randomValue
        };
    }

    /** Displays card pic  */

    function displayCardPic() {
        let nextCard = randomCard();
        displayCard.style.backgroundImage = `url(${nextCard.TL})`;
        displayCard.style.backgroundPosition = 'center';
        displayCard.style.backgroundSize = '10vw 25vh';
        return nextCard;
    }

    displayCardPic();

    // Add event listeners

    higherButton.addEventListener('click', function () {
        let nextCardAgain = displayCardPic();
        console.log(nextCardAgain.value);
    });

    lowerButton.addEventListener('click', function () {
        let nextCardAgain = displayCardPic();
        console.log(nextCardAgain.value);
    });

});