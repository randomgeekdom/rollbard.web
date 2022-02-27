import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';



@NgModule({
  declarations: [
    HomeComponent,
    ResourcesComponent,
    NpcGeneratorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TerraMachinaModule { }
