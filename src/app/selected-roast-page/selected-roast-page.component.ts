import { Component, OnInit, Input, Inject } from '@angular/core';
import { CoffeeResult } from '../coffeeResults';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-selected-roast-page',
  templateUrl: './selected-roast-page.component.html',
  styleUrls: ['./selected-roast-page.component.css']
})

export class SelectedRoastPageComponent implements OnInit {
  page = 1;

  selectedCoffee: any;
  name: any;
  checkout = [];

  @Input() message: CoffeeResult;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectCoffee(coffee: any): void {
    this.selectedCoffee = coffee;
    this.page = 2;
  }
  buyNow(name: any): void {
    this.name = name;
    this.checkout = [];
    console.log(this.checkout);
  }
  openDialog(result: any): void {
    console.log(result);
    const dialogRef = this.dialog.open(ReviewDialog, {
      width: '500px',
      height: '600px',
      data: result
    });
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
  ) { }

  _data: any;

  ngOnInit() {
    this._data = this.data;
    this.findReviews(this.data.id);
    this.currentUserId = localStorage.getItem('userId');
    this.currentUserName = localStorage.getItem('email');
    this.admin = localStorage.getItem('admin');
    console.log(this.admin);
  }

  openUpdate(result): void {
    console.log('update opens')
    const dialogRef = this.dialog.open(UpdateDialog, {
      width: '500px',
      height: '600px',
      data: result,
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
    console.log(this.data)
    this._data = this.data
    this.findReviews(this.data.id);
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
}