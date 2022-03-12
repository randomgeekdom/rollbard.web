import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NpcGeneratorComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class ToolsModule {}
