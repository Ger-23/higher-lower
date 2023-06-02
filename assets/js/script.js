// Declare variables for DOM elements

const displayCard = document.getElementById('display-card');
const higherButton = document.getElementById('button1');
const lowerButton = document.getElementById('button2');
const playerScore = document.getElementById('score');
const numRounds = 26;

let score = 0;
let cards = [];
let currentCardIndex = 0;

// Add event listener to run game when page has loaded

document.addEventListener("DOMContentLoaded", startGame);

higherButton.addEventListener('click', function () {
    let currentCard = cards[currentCardIndex];
    let nextCard = cards[currentCardIndex + 1];
    displayCardPic(nextCard);
    console.log('next', nextCard.value);


    if (currentCard.value < nextCard.value) {
        score += 1;
        updateScoreDisplay();
    } else if (currentCard.value === nextCard.value) {
        alert('Snap! Guess again!');
    }

    else {
        setTimeout(() => {
            displayCardPic(nextCard);
            alert('Gameover! Try again!');
            startGame();
        }, 500);
        return;
    }

    currentCardIndex += 1;

    if (currentCardIndex >= numRounds) {
        alert('Gameover! Play again!');
        startGame();
    }
    else {
        displayCardPic(cards[currentCardIndex]);
    }
});

lowerButton.addEventListener('click', function () {
    let currentCard = cards[currentCardIndex];
    let nextCard = cards[currentCardIndex + 1];
    displayCardPic(nextCard);
    console.log('next', nextCard.value);

    if (currentCard.value > nextCard.value) {
        score += 1;
        updateScoreDisplay();
    } else if (currentCard.value === nextCard.value) {
        alert('Snap! Guess again!');
    }

    else {
        setTimeout(() => {
            displayCardPic(nextCard);
            alert('Gameover! Try again!');
            startGame();
        }, 500);
        return;
    }

    currentCardIndex += 1;

    if (currentCardIndex >= numRounds) {
        alert('Game complete! Play again!');
        startGame();
    }

    else {
        displayCardPic(cards[currentCardIndex]);
    }
});

/** Set start conditions and begin game */

function startGame() {
    score = 0;
    updateScoreDisplay();
    cards = [];
    currentCardIndex = 0;

    for (let i = 1; i <= numRounds; i++) {
        let randomCardToArray = randomCard();
        cards.push(randomCardToArray);
    }

    displayCardPic(cards[currentCardIndex]);
}

/** Generates random card */

function randomCard() {
    let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomValue = Math.floor(Math.random() * 13) + 1;
    return {
        TL: `assets/images/${randomSuit}_${randomValue}.png`,
        value: randomValue
    };
}

/** Displays card pic  */

function displayCardPic(card) {
    displayCard.style.backgroundImage = `url(${card.TL})`;
    displayCard.style.backgroundPosition = 'center';
    displayCard.style.backgroundSize = '70%';
}

/** Update score on webpage */

function updateScoreDisplay() {
    playerScore.textContent = score.toString();
}

displayCardPic(cards[currentCardIndex]);