import { Component, OnInit , Input} from '@angular/core';
import { SelectedRoastPageComponent } from '../selected-roast-page/selected-roast-page.component';

@Component({
  selector: 'app-selected-coffee-page',
  templateUrl: './selected-coffee-page.component.html',
  styleUrls: ['./selected-coffee-page.component.css']
})
export class SelectedCoffeePageComponent implements OnInit {
  selectedCoffee: any;


  @Input() checkout: string[];



  constructor() { }

  ngOnInit() {
    this.runThis();
  }



  runThis(): void {
    console.log(this.selectedCoffee);
    console.log(this.checkout);
  }



}
