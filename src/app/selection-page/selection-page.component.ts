import { Component, OnInit } from '@angular/core';
// import { SearchService } from '../search.service';


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

  selectionPage: any;

  choices: Choice[] = [
    {value: 'light', viewValue: 'Light Roast'},
    {value: 'medium', viewValue: 'Medium Roast'},
    {value: 'dark', viewValue: 'Dark Roast'}
  ]

  // constructor(private searchService: SearchService) { }

  ngOnInit() {
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