import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectCardComponent } from './components/select-card/select-card.component';
import { AngularMaterialModule } from './material/material.module';
import { DeckService } from './services/deck.service';
import { Router } from '@angular/router';
import { ViewCardsComponent } from './components/view-cards/view-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ReadingComponent } from './components/reading/reading.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCardComponent,
    ViewCardsComponent,
    HomeComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
