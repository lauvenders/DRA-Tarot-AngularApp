import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { Deck } from '../classes/deck'
import { DECKS } from '../mock-cards'
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  decksUrl = 'http://localhost:8080/decks';
  cardsUrl = 'http://localhost:8080/cards';
  decks: Deck[]

  constructor(private http: HttpClient) { }

  // DONE
  async getDecks(): Promise<Observable<any>> {
    // return of(DECKS)
    await this.getFilledDecks().then((decks) => {this.decks = decks});
    // console.log(this.decks)
    return of(this.decks)
  }

  // DONE
  async getFilledDecks(){
    await(this.http.get(this.decksUrl).toPromise()
    .then(async (decks: any) => { 
      this.decks = decks._embedded.decks; 
      // console.log(this.decks[0]);
      for(let i = 0; i < this.decks.length; i++){

        await this.http.get(decks._embedded.decks[i]._links.cards.href).subscribe(async (cards: any) => {

          let _cards: Card[] = cards._embedded.cards;
          
          for(let j = 0; j < _cards.length; j++){
            // console.log(cards);
            await this.http.get(cards._embedded.cards[j]._links.meanings.href).subscribe((meanings: any) => {
              // console.log(_cards[j])
              _cards[j].meanings = meanings._embedded.meanings;
              _cards[j].class = "upright"
            });

            this.decks[i].cards = _cards;
            // console.log(this.decks)
          }
          // return;
        });
        // console.log(this.decks)
        // return;
      }
    })
    )
    return this.decks;
  }

  // Find deck by name
  getDeck(deck_name: string): Observable<Deck[]> {
    // let res = [];
    // DECKS.forEach(element => {
    //   if (element.name == deck_name || deck_name == 'full-deck') {
    //     // return of(element.cards);
    //     res.push(...element.cards);
    //   }
    // });
    // return of(res);

    return this.http.get<Deck[]>(this.decksUrl+"/search/findbyname?name=" + deck_name)    
  }

  // DONE
  // Get list of cards by deck name
  async getCards(deck_name: string): Promise<Observable<any>> {
    await this.getFilledDecks().then((decks) => {this.decks = decks});
    console.log(this.decks)
    // return this.http.get(this.decksUrl+"/search/findByName?name=" + deck_name)
    for (let deck of this.decks) {
      if (deck.name == deck_name) {
        return of(deck);
      }
    }
  }

  async getRandomThree(deck_name: string){
    let cards;
    if(deck_name != 'full-deck'){
      await this.getCards(deck_name).then(p => {p.subscribe(deck => {
        console.log(deck)
      })});
    } else {
      // TODO
    }
  }

  // DONE
  // Find  card by name
  getCard(deck_name: string, card_name: string): Observable<Card> {
    for (let deck of this.decks) {
      if (deck.name == deck_name) {
        for (let card of deck.cards) {
          if (card.name == card_name) {
            // console.log(card);
            return of(card)
          }
        }
      }
    }
    return null;
    // return this.http.get<Card>(this.cardsUrl+"/search/findByName?name=" + card_name)

  }

}
