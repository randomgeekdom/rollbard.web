import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintablesComponent } from './printables/printables.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    PrintablesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VigilantCityModule { }
