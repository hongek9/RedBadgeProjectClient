import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addReview(review: Review, coffeeId: number): Observable<Review> {
    return this.http.post<Review>(`http://localhost:3000/review/${coffeeId}`, JSON.stringify(review), this.httpOptions);
  }

  getReview(coffeeId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:3000/review/${coffeeId}`);
  }

  editReview(review: Review, coffeeId: number): Observable<any> {
    return this.http.put(`http://localhost:3000/review/${coffeeId}`, review, this.httpOptions);
  }

  deleteReview(reviewId: number): Observable<Review> {
    return this.http.delete<Review>(`http://localhost:3000/review/${reviewId}`, this.httpOptions);
  }
}
