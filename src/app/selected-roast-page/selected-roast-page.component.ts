import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-roast-page',
  template: `
  <h3>{{message}}</h3>`,
  // I need to use {{}} to recieve the information from the parent comonent. 
  styleUrls: ['./selected-roast-page.component.css']
})
export class SelectedRoastPageComponent implements OnInit {

// I am attempting to pass the data from the parent component(selectionPage) to the child component(selectedRoastPage). My resource says I need to use the @Input() with the child component and the   parentMessage = "message from parent" underneath the export class in the parent component. 

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
