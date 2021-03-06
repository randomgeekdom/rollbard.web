import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './terra-machina/home/home.component';
import { ResourcesComponent } from './terra-machina/resources/resources.component';
import { NpcGeneratorComponent } from './tools/npc-generator/npc-generator.component';
import { AboutComponent } from './vigilant-city/about/about.component';
import { CharacterSheetComponent } from './vigilant-city/character-sheet/character-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'vigilant-city',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'character-sheet',
        component: CharacterSheetComponent,
      }
    ],
  },
  {
    path: 'terra-machina',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'resources',
        component: ResourcesComponent,
      }
    ],
  },
  {
    path: 'tools',
    children:[
      {
        path: 'npc-generator',
        component: NpcGeneratorComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
