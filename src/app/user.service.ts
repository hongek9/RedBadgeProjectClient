import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { User } from './user';
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
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('sessionToken')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`https://jce-cupojoy-server.herokuapp.com/user/signup`, user).pipe(map(current => {
      // localStorage.setItem('user', JSON.stringify(current));
      localStorage.setItem('admin', JSON.stringify(current.user.admin));
      localStorage.setItem('sessionToken', JSON.stringify(current.sessionToken));
      localStorage.setItem('userID', JSON.stringify(current.user.id));
      localStorage.setItem('email', current.user.email);
      this.currentUserSubject.next(current);
      return current;
    }));
  }

  signInUser(user: User): Observable<User> {
    return this.http.post<User>(`https://jce-cupojoy-server.herokuapp.com/user/signin`, user).pipe(map(current => {
      // localStorage.setItem('user', JSON.stringify(current));
      localStorage.setItem('admin', JSON.stringify(current.user.admin));
      localStorage.setItem('sessionToken', JSON.stringify(current.sessionToken));
      localStorage.setItem('userId', JSON.stringify(current.user.id));
      localStorage.setItem('email', JSON.stringify(current.user.email));
      this.currentUserSubject.next(current);
      return current;
    },
    error => {
      console.log(error);
    }));
  }

  logout() {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('admin');
    localStorage.removeItem('checkout');
    this.currentUserSubject.next(null);

  }
}
