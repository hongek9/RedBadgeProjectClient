import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from './result';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//     providedIn: 'root'
//   })
//   export class SearchService {
//     private  = '';
  
//     httpOptions = {
//       headers: new HttpHeaders({'Content-Type': 'application/json'})
//     };
  
//     constructor(
//       private http: HttpClient
//     ) { }
  
//     getResults(): Observable<Result[]> {
//       return this.http.get<Result[]>;
  
//     }
//   }