const suits = ['hearts', 'clubs', 'spades', 'diamonds']

const faces = [
  { name: 'Ace', value: 1, },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 },
  { name: 'Four', value: 4 },
  { name: 'Five', value: 5 },
  { name: 'Six', value: 6 },
  { name: 'Seven', value: 7 },
  { name: 'Eight', value: 8 },
  { name: 'Nine', value: 9 },
  { name: 'Ten', value: 10 },
  { name: 'Jack', value: 11 },
  { name: 'Queen', value: 12 },
  { name: 'King', value: 13 }
]

const paths = [
  { '<img src="./images/ace-of-hearts.svg" alt="ace-of-hearts" width="280">' },
  { '<img src="./images/ace-of-hearts.svg" alt="ace-of-hearts" width="280">' },
  { name: 'Three', value: 3 },
  { name: 'Four', value: 4 },
  { name: 'Five', value: 5 },
  { name: 'Six', value: 6 },
  { name: 'Seven', value: 7 },
  { name: 'Eight', value: 8 },
  { name: 'Nine', value: 9 },
  { name: 'Ten', value: 10 },
  { name: 'Jack', value: 11 },
  { name: 'Queen', value: 12 },
  { name: 'King', value: 13 }
]

const Deck = []

// function to creat a deck of cards
const createDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    // console.log(suits[suitsIndex])
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
      // console.log(faces[faceIndex])
      const name = faces[faceIndex].name
      const value = faces[faceIndex].value
      const suit = suits[suitsIndex]
      // console.log(suits)
      Deck.push({
        suit: suit,
        name: name,
        value: value
      })
      //  console.log(value)
      // console.log(name + ' of ' + suit)
    }
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
  for (let i = 0; i < 5; i++) {
    const cardCheck = 
    if (Deck[i].name.includes('Ace') && Deck[i].suit.inclues('clubs')) {
      // Found world
      // create a new p tag
      const newElement = document.createElement('<img src="./images/3-of-diamonds.svg" alt="3-of-diamonds" width="280">')
      // update the content of the new p tag
      newElement.textContent = `${Deck[i].name} of ${Deck[i].suit}`
      // check to see if card contains a specific name and suit
    }

    // add the new p to the DOM
    document.querySelector('.card-01').appendChild(newElement)
  }
}

// const changeColor1 = () => {
//   document.querySelector('.card-01 p').style.background = 'red'
// }

document
  .querySelector('.card-back-click')
  .addEventListener('click', printFiveRandomCards)


const main = () => {
  createDeck()
  shuffleDeck()

}



document.addEventListener('DOMContentLoaded', main)