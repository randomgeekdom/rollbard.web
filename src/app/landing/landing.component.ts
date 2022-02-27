import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public updates: string[] = [
    '2022-02-26: Started Vigilant City integration',
    '2022-01-29: A new year, a new version of the website has been released.'
];

  public getUpdates():string[]{
    if(this.updates.length>30){
      this.updates.slice(0, 30);
    }

    return this.updates;
  }
}
