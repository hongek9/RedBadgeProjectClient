import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';


export interface Choice {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css']
})
export class SelectionPageComponent implements OnInit {
roastResults: any;

  choices: Choice[] = [
    {value: 'light', viewValue: 'Light Roast'},
    {value: 'medium', viewValue: 'Medium Roast'},
    {value: 'dark', viewValue: 'Dark Roast'}
  ];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    // this.searchRoast();
  }

  searchRoast(roast: string): void {
    this.coffeeService.getRoast(roast).subscribe(data => {
      console.log(data);
      this.roastResults = data;
      console.log(this.roastResults);
    });
  }
  // click (click: Choice): void {
  //   this.searchService.getResults(this.choices)
  //   .subscribe(data => {
  //     console.log(data);
  //     this.click = data;
  //     console.log(this.searchResults.results);
  //   });
  // }

}


// hard code the three options, light, medium, dark roast coffee.
