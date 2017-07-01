import { SearchResultsComponent } from './search-results-component';
import { FlightDetailComponent } from './flight-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
