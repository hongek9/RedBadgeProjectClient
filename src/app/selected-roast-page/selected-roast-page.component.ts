import { Component, OnInit, Input, Inject } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { CoffeeService } from '../coffee.service';
import { MatDialog, MAT_DIALOG_DATA  } from '@angular/material/dialog';


@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})


export class SelectedRoastPageComponent implements OnInit {
  page = 1;

  selectedCoffee: any;
  name: CoffeeResult[];
  // checkout: string[];
  
  @Input() message: CoffeeResult;
  
  
  constructor( private coffeeService: CoffeeService) { }
  ngOnInit() {

  }

  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }

  buyNow(name: any): void {
    this.name = name;
  
    this.coffeeService.cartCoffees.emit(this.name)
  }
//we created an event to subscribe to the data of the buyNow button from the checkout page.

  runThis(): void{
    console.log(this.message);
  }

  // runThis(): void{
  //   console.log(this.message);
  // }

}

@Component({
  selector: 'review-dialog',
  templateUrl: 'review-dialog.html',
  styleUrls: ['review-dialog.css'],
})

export class ReviewDialog{
  admin: string;


  reviewResults: any;
  @Input() message: CoffeeResult;
  currentUserId: any;
  currentUserName: any;

  constructor(private reviewService: ReviewService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  _data: any;

  ngOnInit() {
    this._data = this.data;
    this.findReviews(this.data.id);
    this.currentUserId = localStorage.getItem('userId');
    this.currentUserName = localStorage.getItem('email');
    this.admin = localStorage.getItem('admin');
    console.log(this.admin);
  }


    createReview(review: Review, coffeeId: number) {
      console.log(review);
      this.reviewService.addReview(review, coffeeId).subscribe(data => {
        console.log(data);
        this.findReviews(coffeeId);
      });
    }

    findReviews(coffeId: number) {
      this.reviewService.getReview(coffeId).subscribe(data => {
          this.reviewResults = data;
          console.log(this.reviewResults);
      });
    }

    updateReview(review: Review, coffeeId: number) {
      this.reviewService.editReview(review, coffeeId).subscribe(data => {
        console.log(data);
        this.findReviews(coffeeId);
      });
    }

    destroyReview(reviewId: number, coffeeId: number) {
      this.reviewService.deleteReview(reviewId).subscribe(data => {
        console.log(data);
        this.findReviews(coffeeId);
      });
    }
}

