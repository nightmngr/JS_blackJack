//
// BlackJack
//

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

let suits = [ "Hearts", "clubs", "Diamonds", "Spades" ];
let values = ['Ace', 'King', 'Queen', 'Jack', 
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            deck.push( values[valueIdx] + " of " + suits[suitIdx] );
        }
    }
    return deck;
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck();
let playerCards = [ getNextCard(), getNextCard() ];

console.log("Welcome to BlackJack!");
console.log("You are delt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);
