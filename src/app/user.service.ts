import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`https://jce-cupojoy-server.herokuapp.com/user/signup`, user).pipe(map(current => {
      localStorage.setItem('currentUser', JSON.stringify(current));
      this.currentUserSubject.next(current);
      return current;
    }));
  }

  signInUser(user: User): Observable<User> {
    return this.http.post<User>(`https://jce-cupojoy-server.herokuapp.com/user/signin`, user).pipe(map(current => {
      localStorage.setItem('currentUser', JSON.stringify(current));
      this.currentUserSubject.next(current);
      return current;
    },
    error => {
      console.log(error);
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }
}
