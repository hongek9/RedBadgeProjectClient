import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/user/signup`, JSON.stringify(user), this.httpOptions);
  }

  signInUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/user/signin`, user, this.httpOptions);
  }
}
