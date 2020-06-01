import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadingComponent } from './components/reading/reading.component';
import { SelectCardComponent } from './components/select-card/select-card.component';
import { ViewCardsComponent } from './components/view-cards/view-cards.component';


const routes: Routes = [{path: '', component: SelectCardComponent},
                        {path: 'reading', component: ReadingComponent},
                        {path:'view-cards', component: ViewCardsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
