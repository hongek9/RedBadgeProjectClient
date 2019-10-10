import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../review.service';
import { Review } from '../review';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewResults: any;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
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
