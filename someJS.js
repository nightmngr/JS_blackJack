//
// BlackJack
//

/**************************************
 *              WARNING
 * vo index.html <script> tagot so JS
 * sekogas da odi na kraj na body
 * za JS da znae deka postojat site
 * elementi sto se dodadeni vo HTML-ot
 **************************************/
/* test */


/*
let values = [0,1,2];
let den = Date.now()
console.log(typeof(values[0]));
console.log(values);
values.push(5);
console.log(values);
values.splice(0, 2, 11, 22);
console.log(values); // [11, 22, 2, 5]
values.splice(2,0, 33, 44);
console.log(values);
*/

// Card variables
let suits = [ "Hearts", "clubs", "Diamonds", "Spades" ],
    values = ['Ace', 'King', 'Queen', 'Jack', 
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

// DOM variables (Document Object Model)
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();

});

hitButton.addEventListener('click', function() {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push( card );
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function checkForEndOfGame() {
    updateScores();

    if (gameOver) {
        // let dealer take cards
        while(dealerScore < playerScore
        && playerScore <= 21
        && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    }
    else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    }
    else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        }
        else {
            playerWon = false;
        }
        /* ovie nema potreba tuka
           zatoa sto gi ima vo showStatus()

        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none'; */
    }
}

function showStatus() {
    if (!gameStarted){
        textArea.innerText = 'Welcome to BlackJack!';
        return;
    }

    /* go lista cel deck
    for (var i=0; i<deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
    */
    
    let dealerCardString = '';
    for (let i=0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i=0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'Dealer has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has:\n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += 'YOU WIN!';
        }
        else {
            textArea.innerText += 'DEALER WINS';
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function getCardNumericValue(card) {
    switch(card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}











/*
let deck = createDeck();
let playerCards = [ getNextCard(), getNextCard() ];

console.log("Welcome to BlackJack!");
console.log("You are delt: ");
console.log("  " + getCardString(playerCards[0]));
console.log("  " + getCardString(playerCards[1]));

let cards = [
    {
        suit: "Hearts",
        value: "Queen"
    } 
];

console.log(cards[0].suit);
console.log(cards[0].value);

let result = Math.random() * 52; // za 52 karti
result = Math.trunc(result);
*/
