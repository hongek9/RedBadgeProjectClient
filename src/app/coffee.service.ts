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
<<<<<<< HEAD
=======

>>>>>>> b83e4ab7c18f30a5c01739ade872d70659b6e657
    return this.http.get<CoffeeResult[]>(`https://jce-cupojoy-server.herokuapp.com/coffee/${roast}`)
  }

}


