import { Component, OnInit, Input } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})
export class SelectedRoastPageComponent implements OnInit {
  page = 1;

  selectedCoffee: any;

@Input() message: CoffeeResult;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.runThis();
  }

  openDialog(){
    const dialogRef= this.dialog.open(ReviewDialog);
  }

  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
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

  constructor(private reviewService: ReviewService) { }



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

