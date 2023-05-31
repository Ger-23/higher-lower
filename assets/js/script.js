
document.addEventListener("DOMContentLoaded", function () {

    // Declare constants for DOM elements

    const displayCard = document.getElementById('display-card');
    const higherButton = document.getElementById('button1');
    const lowerButton = document.getElementById('button2');
    const playerScore = document.getElementById('score');

    /** Generates random card */

    function randomCard() {
        let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        let randomSuit = suits[Math.floor(Math.random() * suits.length)];
        let randomValue = Math.floor(Math.random() * 14) + 1;
        return `assets/images/${randomSuit}_${randomValue}.png`;
    }

    /** Displays card pic  */

    function displayCardPic() {
        let nextCard = randomCard();
        displayCard.style.backgroundImage = `url(${nextCard})`;
        displayCard.style.backgroundPosition = 'center';
        displayCard.style.backgroundSize = '10vw 25vh';
        return nextCard;
    }

    displayCardPic();

});