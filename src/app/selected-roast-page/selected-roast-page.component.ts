import { Component, OnInit, Input, Inject } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { CoffeeService } from '../coffee.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})

export class SelectedRoastPageComponent implements OnInit {
  page = 1;

  selectedCoffee: any;
  name: CoffeeResult[];
  checkout: string[] =[];
  
  
  @Input() message: CoffeeResult;
  
  constructor( private coffeeService: CoffeeService, public dialog: MatDialog) {
    // localStorage.setItem('checkout', JSON.stringify({ name: name }))
   }
  
  
  ngOnInit() {
    // this.checkout();

  }

  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }
  // ******
  // Sending the coffee name from the buyNow function to localStorage. 
  // ******
  buyNow(name: any): void {
    this.checkout.push(name)

    console.log(this.checkout);
  
    localStorage.setItem('checkout',JSON.stringify(this.checkout));

  }
  
  // this.coffeeService.cartCoffees.emit(this.name)
//we created an event to subscribe to the data of the buyNow button from the checkout page.

openDialog(result: any): void {
  console.log(result);
  const dialogRef = this.dialog.open(ReviewDialog, {
    width: '500px',
    height: '600px',
    data: result
  });
}

  runThis(): void{
    console.log(this.message);

  }
}

// Review Modal Component

@Component({
  selector: 'review-dialog',
  templateUrl: 'review-dialog.html',
  styleUrls: ['review-dialog.css'],
})
export class ReviewDialog {
  admin: string;
  reviewResults: any;

  @Input() message: CoffeeResult;
  currentUserId: any;
  currentUserName: any;

  constructor(
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) {}


  _data: any;

  ngOnInit() {
    this._data = this.data;
    this.findReviews(this.data.id);
    this.currentUserId = localStorage.getItem('userId');
    this.currentUserName = localStorage.getItem('email');
    this.admin = localStorage.getItem('admin');
    console.log('admin', this.admin);
  }

  openUpdate(result: any, reviewId: any): void {
    console.log('update opens');
    const dialogRef = this.dialog.open(UpdateDialog, {
      width: '500px',
      height: '600px',
      data: {coffeeID: result, reviewID: reviewId},

    });
    dialogRef.afterClosed().subscribe(results => {
      this.findReviews(this.data.id);
    })
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

  updateReview(review: Review, reviewId: number, coffeeId: number) {
    this.reviewService.editReview(review, reviewId).subscribe(data => {
      console.log(data);
      // this.findReviews(coffeeId);
    });
  }

  destroyReview(reviewId: number, coffeeId: number) {
    this.reviewService.deleteReview(reviewId).subscribe(data => {
      console.log(data);
      this.findReviews(coffeeId);
    });
  }
}

// Update Modal component
@Component({
  selector: 'update-dialog',
  templateUrl: 'update-dialog.html',
})

export class UpdateDialog {

  reviewResults: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialog>,
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  _data: any;

  ngOnInit() {
    console.log(this.data);
    this._data = this.data;
  }

  ngOnDestroy() {
    this.findReviews(this.data.coffeeID);
  }
  
  findReviews(coffeId: number) {
    this.reviewService.getReview(coffeId).subscribe(data => {
      this.reviewResults = data;
      console.log(this.reviewResults);
    });
  }


  updateReview(review: Review, reviewID: number, coffeeId: number) {
    this.reviewService.editReview(review, reviewID).subscribe(data => {
      console.log(data);
      console.log(coffeeId);
      this.findReviews(coffeeId);
    });
  }
}

