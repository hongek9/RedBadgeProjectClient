import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoffeeResult } from './coffeeResults';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  cartCoffees = new EventEmitter<CoffeeResult[]>()
// This is the event emitter for our buyNow button. We set the name of the coffee to coffeeResult[] and I beleive this is where we are housing our array of coffees to purchase. 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) { }

  getRoast(roast: string): Observable<CoffeeResult[]> {
    return this.http.get<CoffeeResult[]>(`https://jce-cupojoy-server.herokuapp.com/coffee/${roast}`)
  }

}


