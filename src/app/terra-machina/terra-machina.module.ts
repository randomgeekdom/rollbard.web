import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ItemsComponent } from './items/items.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';
import { SampleCustomMovesComponent } from './sample-custom-moves/sample-custom-moves.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    ResourcesComponent,
    ItemsComponent,
    BestiaryComponent,
    NpcGeneratorComponent,
    SampleCustomMovesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TerraMachinaModule { }
