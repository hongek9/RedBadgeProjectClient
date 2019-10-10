import { Component, OnInit, Input } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';

@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})
export class SelectedRoastPageComponent implements OnInit {
  @Input() roastResult: CoffeeResult;

  page = 1;

  selectedCoffee: any;
  constructor() { }

  ngOnInit() {
    this.runThis();
  }

  runThis(): void {
    console.log(this.roastResult);
  }

  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }

}
