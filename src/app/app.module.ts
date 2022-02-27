import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TerraMachinaModule } from './terra-machina/terra-machina.module';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { VigilantCityModule } from './vigilant-city/vigilant-city.module';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    TerraMachinaModule,
    VigilantCityModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
