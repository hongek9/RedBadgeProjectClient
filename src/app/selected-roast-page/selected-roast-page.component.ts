import { Component, OnInit, Input } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})
export class SelectedRoastPageComponent implements OnInit {

@Input() message: CoffeeResult;

  constructor() { }
  ngOnInit() {
    this.runThis();
  }

  runThis(): void{
    console.log(this.message);
  }
}
