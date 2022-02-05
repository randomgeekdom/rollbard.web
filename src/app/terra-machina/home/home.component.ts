import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public updates: string[] = [
    '2022-01-29: A new year, a new version of the website has been released.'
];

  constructor() { }

  ngOnInit(): void {
  }

}
