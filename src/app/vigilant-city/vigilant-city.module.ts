import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    CharacterSheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VigilantCityModule { }
