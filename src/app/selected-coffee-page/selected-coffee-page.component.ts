import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-coffee-page',
  templateUrl: './selected-coffee-page.component.html',
  styleUrls: ['./selected-coffee-page.component.css']
})
export class SelectedCoffeePageComponent implements OnInit {
  selectedCoffee: any;

  constructor() { }

  ngOnInit() {
    this.runThis();
  }



  runThis(): void {
    console.log(this.selectedCoffee);
  }



}
