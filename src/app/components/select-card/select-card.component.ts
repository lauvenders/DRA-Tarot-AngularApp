import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent implements OnInit {

  // Enable/disable different parts of the form
  readingDisabled = true;
  deckDisabled = false
  hiddenCards = true;

  // Images for the cards on list
  selectedCards = new Array(10).fill("./assets/back-tarot-card.jpg");
  enableNext="disabled"

  // Images for selected cards
  display = new Array(3).fill("./assets/frame.jpg")
  count = 0

  deck = ""
  reading = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Select deck (on click from first mat-button-togle-group)
  selectDeck(value: any){
    // Enable second group
    this.readingDisabled = false;
    // Disable first group
    this.deckDisabled = true;
    // Save deck value
    this.deck = value
    this.enableNext="enabled"
  }

  // Select reading (on click from second mat-button-togle-group)
  selectReading(value: any){
    this.reading = value
    // Disable second group
    this.readingDisabled = true;
    // Show cards
    this.hiddenCards = false;
  }

  // Scroll to bottom to select cards
  scroll(){
    document.getElementById("cards").scrollIntoView({block: "start", behavior: "smooth"});
  }

  // Select cards
  selectCard(position: any){
    // console.log(position)
    this.display[this.count] = "./assets/back-tarot-card.jpg"
    this.selectedCards[position] = "./assets/frame.jpg"
    this.count++;

    // When three cards are selected, navigate to reading
    if (this.count == 3) {
      this.router.navigate(['/reading'],  { queryParams: { 'deck': this.deck, 'reading': this.reading } })
    }
  }

}
