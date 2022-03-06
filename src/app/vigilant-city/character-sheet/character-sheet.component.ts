import { Component, OnInit } from '@angular/core';
import CharacterSheetModel from '../models/character-sheet-model';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  private sheetStorage = "sheet-storage";
  public character!: CharacterSheetModel;

  constructor() {
    var sheetStorage = localStorage.getItem(this.sheetStorage);
    if(sheetStorage){
      this.character = JSON.parse(sheetStorage) as CharacterSheetModel;
    } else{
      this.character = new CharacterSheetModel();
    }
  }

  ngOnInit(): void {
  }

  public statOptions = [16, 12, 8, 4];

  public SaveToLocal(){
    localStorage.setItem(this.sheetStorage, JSON.stringify(this.character));
  }
}
