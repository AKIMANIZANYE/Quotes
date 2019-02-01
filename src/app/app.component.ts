import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    Quote: string[];

  constructor(){

    this.Quote = ["title","author"," user","quote","date","number","number"];
  }}