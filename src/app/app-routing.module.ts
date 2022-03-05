import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './terra-machina/home/home.component';
import { ResourcesComponent } from './terra-machina/resources/resources.component';
import { NpcGeneratorComponent } from './terra-machina/npc-generator/npc-generator.component';
import { AboutComponent } from './vigilant-city/about/about.component';

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
        path: 'npc-generator',
        component: NpcGeneratorComponent,
      },
      {
        path: 'resources',
        component: ResourcesComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
