import { Component, OnInit } from '@angular/core';
import reference from '../reference.json';

@Component({

  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss']
})
export class BestiaryComponent implements OnInit {
  public bestiary: any[] = [];
  public searchTerm = "";

  constructor() {
   }

  ngOnInit(): void {
    this.bestiary = reference.Bestiary.sort((one, two) => (one.Name > two.Name ? 1 : -1));
  }

  get sortedBestiary(){
    return this.bestiary.filter(x=>!this.searchTerm ||
      x.Name?.toLowerCase().includes(this.searchTerm) ||
      x.Description?.toLowerCase().includes(this.searchTerm)||
      x.Type?.toLowerCase().includes(this.searchTerm)||
      x.Weakness?.toLowerCase().includes(this.searchTerm)||
      x.Immunity?.toLowerCase().includes(this.searchTerm)||
      x.Locations?.toLowerCase().includes(this.searchTerm)||
      x.Attacks?.toLowerCase().includes(this.searchTerm) )
  }

}
