// const suits = ['hearts', 'clubs', 'spades', 'diamonds']

const playingCards = [
  { name: 'Ace', suit: 'hearts', value: 1, path: '<img src="./images/ace-of-hearts.svg" alt="ace-of-hearts" width="280">' },
  { name: 'Two', suit: 'hearts', value: 2, path: '<img src="./images/2-of-hearts.svg" alt="2-of-hearts" width="280">' },
  { name: 'Three', suit: 'hearts', value: 3, path: '<img src="./images/3-of-hearts.svg" alt="3-of-hearts" width="280">' },
  { name: 'Four', suit: 'hearts', value: 4, path: '<img src="./images/4-of-hearts.svg" alt="4-of-hearts" width="280">' },
  { name: 'Five', suit: 'hearts', value: 5, path: '<img src="./images/5-of-hearts.svg" alt="5-of-hearts" width="280">' },
  { name: 'Six', suit: 'hearts', value: 6, path: '<img src="./images/6-of-hearts.svg" alt="6-of-hearts" width="280">' },
  { name: 'Seven', suit: 'hearts', value: 7, path: '<img src="./images/7-of-hearts.svg" alt="7-of-hearts" width="280">' },
  { name: 'Eight', suit: 'hearts', value: 8, path: '<img src="./images/8-of-hearts.svg" alt="8-of-hearts" width="280">' },
  { name: 'Nine', suit: 'hearts', value: 9, path: '<img src="./images/9-of-hearts.svg" alt="9-of-hearts" width="280">' },
  { name: 'Ten', suit: 'hearts', value: 10, path: '<img src="./images/10-of-hearts.svg" alt="10-of-hearts" width="280">' },
  { name: 'Jack', suit: 'hearts', value: 11, path: '<img src="./images/jack-of-hearts.svg" alt="jack-of-hearts" width="280">' },
  { name: 'Queen', suit: 'hearts', value: 12, path: '<img src="./images/queen-of-hearts.svg" alt="queen-of-hearts" width="280">' },
  { name: 'King', suit: 'hearts', value: 13, path: '<img src="./images/king-of-hearts.svg" alt="king-of-hearts" width="280">' },

  { name: 'Ace', suit: 'clubs', value: 1, path: '<img src="./images/ace-of-clubs.svg" alt="ace-of-clubs" width="280">' },
  { name: 'Two', suit: 'clubs', value: 2, path: '<img src="./images/2-of-clubs.svg" alt="2-of-clubs" width="280">' },
  { name: 'Three', suit: 'clubs', value: 3, path: '<img src="./images/3-of-clubs.svg" alt="3-of-clubs" width="280">' },
  { name: 'Four', suit: 'clubs', value: 4, path: '<img src="./images/4-of-clubs.svg" alt="4-of-clubs" width="280">' },
  { name: 'Five', suit: 'clubs', value: 5, path: '<img src="./images/5-of-clubs.svg" alt="5-of-clubs" width="280">' },
  { name: 'Six', suit: 'clubs', value: 6, path: '<img src="./images/6-of-clubs.svg" alt="6-of-clubs" width="280">' },
  { name: 'Seven', suit: 'clubs', value: 7, path: '<img src="./images/7-of-clubs.svg" alt="7-of-clubs" width="280">' },
  { name: 'Eight', suit: 'clubs', value: 8, path: '<img src="./images/8-of-clubs.svg" alt="8-of-clubs" width="280">' },
  { name: 'Nine', suit: 'clubs', value: 9, path: '<img src="./images/9-of-clubs.svg" alt="9-of-clubs" width="280">' },
  { name: 'Ten', suit: 'clubs', value: 10, path: '<img src="./images/10-of-clubs.svg" alt="10-of-clubs" width="280">' },
  { name: 'Jack', suit: 'clubs', value: 11, path: '<img src="./images/jack-of-clubs.svg" alt="jack-of-clubs" width="280">' },
  { name: 'Queen', suit: 'clubs', value: 12, path: '<img src="./images/queen-of-clubs.svg" alt="queen-of-clubs" width="280">' },
  { name: 'King', suit: 'clubs', value: 13, path: '<img src="./images/king-of-clubs.svg" alt="king-of-clubs" width="280">' },

  { name: 'Ace', suit: 'spades', value: 1, path: '<img src="./images/ace-of-spades.svg" alt="ace-of-spades" width="280">' },
  { name: 'Two', suit: 'spades', value: 2, path: '<img src="./images/2-of-spades.svg" alt="2-of-spades" width="280">' },
  { name: 'Three', suit: 'spades', value: 3, path: '<img src="./images/3-of-spades.svg" alt="3-of-spades" width="280">' },
  { name: 'Four', suit: 'spades', value: 4, path: '<img src="./images/4-of-spades.svg" alt="4-of-spades" width="280">' },
  { name: 'Five', suit: 'spades', value: 5, path: '<img src="./images/5-of-spades.svg" alt="5-of-spades" width="280">' },
  { name: 'Six', suit: 'spades', value: 6, path: '<img src="./images/6-of-spades.svg" alt="6-of-spades" width="280">' },
  { name: 'Seven', suit: 'spades', value: 7, path: '<img src="./images/7-of-spades.svg" alt="7-of-spades" width="280">' },
  { name: 'Eight', suit: 'spades', value: 8, path: '<img src="./images/8-of-spades.svg" alt="8-of-spades" width="280">' },
  { name: 'Nine', suit: 'spades', value: 9, path: '<img src="./images/9-of-spades.svg" alt="9-of-spades" width="280">' },
  { name: 'Ten', suit: 'spades', value: 10, path: '<img src="./images/10-of-spades.svg" alt="10-of-spades" width="280">' },
  { name: 'Jack', suit: 'spades', value: 11, path: '<img src="./images/jack-of-spades.svg" alt="jack-of-spades" width="280">' },
  { name: 'Queen', suit: 'spades', value: 12, path: '<img src="./images/queen-of-spades.svg" alt="queen-of-spades" width="280">' },
  { name: 'King', suit: 'spades', value: 13, path: '<img src="./images/king-of-spades.svg" alt="king-of-spades" width="280">' },

  { name: 'Ace', suit: 'diamonds', value: 1, path: '<img src="./images/ace-of-diamonds.svg" alt="ace-of-diamonds" width="280">' },
  { name: 'Two', suit: 'diamonds', value: 2, path: '<img src="./images/2-of-diamonds.svg" alt="2-of-diamonds" width="280">' },
  { name: 'Three', suit: 'diamonds', value: 3, path: '<img src="./images/3-of-diamonds.svg" alt="3-of-diamonds" width="280">' },
  { name: 'Four', suit: 'diamonds', value: 4, path: '<img src="./images/4-of-diamonds.svg" alt="4-of-diamonds" width="280">' },
  { name: 'Five', suit: 'diamonds', value: 5, path: '<img src="./images/5-of-diamonds.svg" alt="5-of-diamonds" width="280">' },
  { name: 'Six', suit: 'diamonds', value: 6, path: '<img src="./images/6-of-diamonds.svg" alt="6-of-diamonds" width="280">' },
  { name: 'Seven', suit: 'diamonds', value: 7, path: '<img src="./images/7-of-diamonds.svg" alt="7-of-diamonds" width="280">' },
  { name: 'Eight', suit: 'diamonds', value: 8, path: '<img src="./images/8-of-diamonds.svg" alt="8-of-diamonds" width="280">' },
  { name: 'Nine', suit: 'diamonds', value: 9, path: '<img src="./images/9-of-diamonds.svg" alt="9-of-diamonds" width="280">' },
  { name: 'Ten', suit: 'diamonds', value: 10, path: '<img src="./images/10-of-diamonds.svg" alt="10-of-diamonds" width="280">' },
  { name: 'Jack', suit: 'diamonds', value: 11, path: '<img src="./images/jack-of-diamonds.svg" alt="jack-of-diamonds" width="280">' },
  { name: 'Queen', suit: 'diamonds', value: 12, path: '<img src="./images/queen-of-diamonds.svg" alt="queen-of-diamonds" width="280">' },
  { name: 'King', suit: 'diamonds', value: 13, path: '<img src="./images/king-of-diamonds.svg" alt="king-of-diamonds" width="280">' }
]

const Deck = []

// function to creat a deck of cards
const createDeck = () => {
  for (let cardIndex = 0; cardIndex < playingCards.length; cardIndex++) {
    //console.log(playingCards[cardIndex])
    const name = playingCards[cardIndex].name
    const suit = playingCards[cardIndex].suit
    const value = playingCards[cardIndex].value
    const path = playingCards[cardIndex].path
    // console.log(suits)
    console.log(playingCards[cardIndex])
    Deck.push({
      name: name,
      suit: suit,
      value: value,
      path: path
    })
    //  console.log(value)
    // console.log(name + ' of ' + suit)
  }
}

const shuffleDeck = () => {
  // for (let i = Deck.length - 1; i >= 0; i--) {
  for (let i = 0; i < Deck.length; i++) {
    const j = Math.floor(Math.random() * i)
    const temp = Deck[i]
    Deck[i] = Deck[j]
    Deck[j] = temp
    // console.log(i, j)
  }
}


const printFiveRandomCards = () => {
  // print out the first 5 cards
  for (let i = 0; i < 1; i++) {
    // create a new p tag
    // update the content of the new p tag
    const cardPics = document.createElement('img');
    img.src = Deck[i].path;
    document.getElementById('card-01').appendChild(cardPics);

    // add the new p to the DOM
    // document.querySelector('.card-01').textContent = Deck[i].path
  }
}


// const printFiveRandomCards = () => {
//   // print out the first 5 cards
//   for (let i = 0; i < 5; i++) {
//     // create a new p tag
//     const newElement = document.createElement('p')
//     // update the content of the new p tag
//     newElement.textContent = `${Deck[i].name} of ${Deck[i].suit}`
//     // add the new p to the DOM
//     document.querySelector('.card-01').appendChild(newElement)
//   }
// }


// const printFiveRandomCards = () => {
//   // print out the first 5 cards
//   for (let i = 0; i < 5; i++) {
//     const cardCheck = 
//     if (Deck[i].name.includes('Ace') && Deck[i].suit.inclues('clubs')) {
//       // Found world
//       // create a new p tag
//       const newElement = document.createElement('<img src="./images/3-of-diamonds.svg" alt="3-of-diamonds" width="280">')
//       // update the content of the new p tag
//       newElement.textContent = `${Deck[i].name} of ${Deck[i].suit}`
//       // check to see if card contains a specific name and suit
//     }

//     // add the new p to the DOM
//     document.querySelector('.card-01').appendChild(newElement)
//   }
// }

// const changeColor1 = () => {
//   document.querySelector('.card-01 p').style.background = 'red'
// }

document
  .querySelector('.card-back-click')
  .addEventListener('click', printFiveRandomCards)


const main = () => {
  createDeck()
  shuffleDeck()
  printFiveRandomCards()
}



document.addEventListener('DOMContentLoaded', main)