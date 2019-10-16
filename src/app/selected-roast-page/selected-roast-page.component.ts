import { Component, OnInit, Input, Inject } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})


export class SelectedRoastPageComponent implements OnInit {
  page = 1;
  
  selectedCoffee: any;


@Input() message: CoffeeResult;

  constructor(public dialog:MatDialog) {}

  ngOnInit() {
  }
  
  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }
  openDialog(result): void{
    console.log(result);
    const dialogRef= this.dialog.open(ReviewDialog, {
      width: '500px',
      height: '600px',
      data: result
    });
  } 

  runThis(): void{
    console.log(this.message);
  }

}

@Component({
  selector: 'review-dialog',
  templateUrl: 'review-dialog.html',
  styleUrls: ['review-dialog.css'],
})

export class ReviewDialog{
  reviewResults: any;
  @Input() message: CoffeeResult;

  constructor(private reviewService: ReviewService, @Inject(MAT_DIALOG_DATA) public data: any) { }
_data;
  ngOnInit() {
  this._data = this.data
  }
    createReview(review: Review, coffeeId: number) {
      this.reviewService.addReview(review, coffeeId).subscribe(data => {
        console.log(data);
      });
    }
  
    findReviews(coffeId: number) {
      this.reviewService.getReview(coffeId).subscribe(data => {
          this.reviewResults = data;
      });
    }
  
    updateReview(review: Review, coffeId: number) {
      this.reviewService.editReview(review, coffeId).subscribe(data => {
        console.log(data);
      });
    }
  
    destroyReview(reviewId: number) {
      this.reviewService.deleteReview(reviewId).subscribe(data => {
        console.log(data);
      });
    }
}

