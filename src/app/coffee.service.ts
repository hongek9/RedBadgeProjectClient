import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoffeeResult } from './coffeeResults';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) { }

  getRoast(roast: string): Observable<CoffeeResult[]> {
    return this.http.get<CoffeeResult[]>(`http://localhost:3000/coffee/${roast}`)
  }

}


