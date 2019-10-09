import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { SelectedRoastPageComponent } from '../selected-roast-page/selected-roast-page.component';
import { ChildActivationEnd } from '@angular/router';


export interface Choice {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-selection-page',
  templateUrl: 'selection-page.component.html',

  template: `<app-selected-roast-page [message] = 'roastResults' > </app-selected-roast-page>`,
  //So I need to pass my message from the parent to child and I use [] to do so. 

  styleUrls: ['./selection-page.component.css']
})
export class SelectionPageComponent implements OnInit {
roastResults: any[];
 
  choices: Choice[] = [
    {value: 'light', viewValue: 'Light Roast'},
    {value: 'medium', viewValue: 'Medium Roast'},
    {value: 'dark', viewValue: 'Dark Roast'}
  ];

// @ViewChild(SelectedRoastPageComponent) 
// so here I am attempting to use the @Input function call to pass data from selection page to selected roast page. This is the parent component. 
 

  constructor(private coffeeService: CoffeeService) { }

  // message = (this.roastResults);
  // Here I am sending the data set to roastResults to the child component(selectedRoastPage).

  ngOnInit() {
    this.searchRoast('medium');
    // We called the searchRoast function within the ngOnInit() function so that we could see if our data was being properly transfered. 
    // this.roastResults = this.roastResults.data
  }

  // Here we created the searchRoast function to fetch our data from the backend. We then set our data to the variable roastResults.
  searchRoast(roast: string): void {
    this.coffeeService.getRoast(roast).subscribe(data => {
      console.log(data);
      this.roastResults = data;
      console.log(this.roastResults);
    });
  }

}



