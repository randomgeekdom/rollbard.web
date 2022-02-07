import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BestiaryComponent } from './terra-machina/bestiary/bestiary.component';
import { HomeComponent } from './terra-machina/home/home.component';
import { ItemsComponent } from './terra-machina/items/items.component';
import { ResourcesComponent } from './terra-machina/resources/resources.component';
import { SampleCustomMovesComponent } from './terra-machina/sample-custom-moves/sample-custom-moves.component';
import { NpcGeneratorComponent } from './tools/npc-generator/npc-generator.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'npc-generator',
    component: NpcGeneratorComponent
  },
  {
    path: 'terra-machina',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'bestiary',
        component: BestiaryComponent,
      },
      {
        path: 'items',
        component: ItemsComponent,
      },
      {
        path: 'resources',
        component: ResourcesComponent,
      },
      {
        path: 'sample-custom-moves',
        component: SampleCustomMovesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
