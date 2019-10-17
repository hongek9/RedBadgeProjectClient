import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  quotesToken = localStorage.getItem('sessionToken');
  sessionToken = this.quotesToken.replace(/['"]+/g, '');
  httpOptions = {
    // tslint:disable-next-line: max-line-length
    headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: this.sessionToken})
  };

  constructor(private http: HttpClient) { }

  addReview(review: Review, coffeeId: number): Observable<Review> {
    // console.log(localStorage.getItem('sessionToken'));
    return this.http.post<Review>(`https://jce-cupojoy-server.herokuapp.com/review/${coffeeId}`, JSON.stringify(review), this.httpOptions);
  }

  getReview(coffeeId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`https://jce-cupojoy-server.herokuapp.com/review/${coffeeId}`);
  }

  editReview(review: Review, coffeeId: number): Observable<any> {
    return this.http.put(`https://jce-cupojoy-server.herokuapp.com/review/${coffeeId}`, review, this.httpOptions);
  }

  deleteReview(reviewId: number): Observable<Review> {
    return this.http.delete<Review>(`https://jce-cupojoy-server.herokuapp.com/review/${reviewId}`, this.httpOptions);
  }
}
