import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentLocationComponent } from './_components/_shared/current-location/current-location.component';
import { StoredLocationComponent } from './_components/_shared/stored-location/stored-location.component';
import { TrashLocationComponent } from './_components/_shared/trash-location/trash-location.component';
import { GreenButtonComponent } from './_components/_shared/green-button/green-button.component';
import { HomePageComponent } from './_components/_pages/home-page/home-page.component';
import { DetailsPageComponent } from './_components/_pages/details-page/details-page.component';
import { InputComponent } from './_components/_shared/input/input.component';
import { DayDetailsComponent } from './_components/_shared/day-details/day-details.component';
import { HourDetailsComponent } from './_components/_shared/hour-details/hour-details.component';
import { CurrentLocationGeoComponent } from './_components/_shared/current-location-geo/current-location-geo.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentLocationComponent,
    StoredLocationComponent,
    TrashLocationComponent,
    GreenButtonComponent,
    HomePageComponent,
    DetailsPageComponent,
    InputComponent,
    DayDetailsComponent,
    HourDetailsComponent,
    CurrentLocationGeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
