import { Component, OnInit, Input } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { MatDialog } from '@angular/material/dialog';
import { CoffeeService } from '../coffee.service';


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
    this.runThis();
  }
  
  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }
  
  buyNow(name): void {
    this.name = name;
  
    this.coffeeService.cartCoffees.emit(this.name)
  }
//we created an event to subscribe to the data of the buyNow button from the checkout page.

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

  constructor(private reviewService: ReviewService, public dialog:MatDialog) { }

  openDialog(){
    const dialogRef= this.dialog.open(ReviewDialog, {
      width: '500px',
      height: '400px',
    });
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

