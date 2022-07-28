import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rental } from '../entities/rental';

@Injectable({providedIn: 'root'})
export class RentalService {
  private rentalsUrl = 'api/rentals';

  constructor(private http: HttpClient) { }

  /* GET rentals whose location contains search term */
  searchRentals(term: string): Observable<Rental[]>{
    const url = `${this.rentalsUrl}/?location=${term}`;

    if(!term.trim())  return of([]);

    return this.http.get<Rental[]>(url);
  }

}
