import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Card, Meaning } from 'src/app/classes/card';
import { Deck } from 'src/app/classes/deck';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent implements OnInit {

  // Decks list
  decks: Deck[]

  constructor(private deckService: DeckService) {
  }

  ngOnInit(): void {
    this.decks = [];
    this.getCards();
  }

  // Get decks with cards
  getCards() {
    this.deckService.getDecks().then(p => {
      p.subscribe(decks => {
        this.decks = decks;
        for(let deck of decks){
          deck.name = this.parseName(deck.name)
        }
      })
    });
  }

  // Parse deck names (to make them pretty only)
  parseName(name: string){
    if(name == 'majorarcana'){
      return 'Major Arcana';
    } else {
      return "Suit of " + name[0].toUpperCase() + name.substring(1);
    }
  }

  // Rotate card on click and display meanings
  rotateCard(deck: any, card: any, i: number, j: number) {
    this.deckService.getCard(deck.name, card.name).subscribe(card => {
      if (card.class == "reversed") {
        card.class = "upright";
      } else {
        card.class = "reversed";
      }
      this.setMeaning(card, i, j);
    });

  }

  // Print meanings
  private setMeaning(card: Card, i: number, j:number){
    for (let x of ["love", "career", "finances"]){
      document.getElementById(x + i + j).innerHTML = card.meanings.filter(meaning => 
        meaning.name.toLowerCase() == card.class +" "+ x + " meaning")[0].text
    }
  }

  // Print initial meanings
  initMeanings(card: any, name: string): string {
    // To avoid errors before loading cards
    try {
      return card.meanings.filter(meaning => meaning.name.toLowerCase() == 'upright ' +name+ ' meaning')[0].text
    } catch {
      return ""
    }
    
  }

  // Scroll to selected deck
  scroll(deck: Deck){
    document.getElementById(deck.name).scrollIntoView({block: "start", behavior: "smooth"});
  }

}
