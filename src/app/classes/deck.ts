import { Card } from "../classes/card"

// enum deckNames {
//     majorArcana = 'majorarcana',
//     suitWands = "wands",
//     suitCups = "cups",
//     suitSwords = "swords",
//     suitPentacles = "pentacles",
//     fullDeck = "full-deck"
// }

export class Deck {
    name: string
    cards: Card[]

    constructor(name: string) {
        this.name = name
        this.cards = []
    }

    addCard(card: Card){
        this.cards.push(card);
    }

    addCards(cards: Card[]){
        this.cards = cards
    }
    
}
