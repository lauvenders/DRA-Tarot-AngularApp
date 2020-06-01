import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Card } from 'src/app/classes/card';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/classes/deck';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  // Full list of decks
  decks: Deck[]
  // Active deck (if full-deck is selected, it's null)
  deck: any;
  // Selected cards (to avoid repeated values)
  cards: Card[];
  // Type of reading
  reading: string;
  // Deck selected
  deck_name: string;

  constructor(private deckService: DeckService, private route: ActivatedRoute) {
    // Get reading and deck from router params
    this.route.queryParams.subscribe(params => {
      this.reading = params.reading;
      this.deck_name = params.deck
    });
  }

  ngOnInit(): void {
    this.cards = []
    this.getCards();
  }

  // Get cards from service
  getCards() {
    this.deckService.getDecks().then(p => {
      p.subscribe(decks => {
        this.decks = decks;

        // Get selected deck
        if (this.deck_name != "full-deck") {
          this.deck = this.decks.filter(deck => deck.name == this.deck_name)[0];
        }
      })
    });
  }

  getRandomCard(id: string) {
    // Cards of selected deck
    let deck;

    // Get random deck for full-deck readings
    if(this.deck_name == 'full-deck'){
      deck = this.decks[Math.floor(Math.random() * this.decks.length)].cards;
      console.log(deck)
    } else {
      deck = this.deck.cards;
    }

    // Select random card from deck (called on click from card)
    let card = deck[Math.floor(Math.random() * deck.length)]

    // If cards doesn't contain the selected card (to avoid repeating cards)
    if (this.cards.filter(c => c.name == card.name).length == 0) {
      // Set random reversed cards
      if (Math.random() >= 0.5) {
        card.class = "reversed";
      }

      // Add card to cards
      this.cards.push(card)

      // Set card's picture
      document.getElementById(id).setAttribute("src", card.img);
      document.getElementById(id).setAttribute("class", card.class);

      // Set card's name and meaning
      document.getElementById(id + '-name').innerHTML = card.name;
      // Select meaning acording to reading value
      document.getElementById(id + '-meaning').innerHTML = card.meanings.filter(meaning =>
        meaning.name.toLowerCase() == card.class + " " + this.reading + " meaning"
      )[0].text;
      
    } else {
      // If the card isn't unique, repeat
      this.getRandomCard(id)
    }

  }

}
