import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TerraMachinaModule { }
