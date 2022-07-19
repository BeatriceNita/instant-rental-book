import { Observable, of, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Booking } from '../entities/booking';

@Injectable({providedIn: 'root'})
export class BookingService {
  private bookingsUrl = 'api/bookings';
  private rental_id!: number;

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }

  constructor(private http: HttpClient) { }

  getRentalId(): number {
    return this.rental_id;
  }

  setRentalId(rental_id: number): void {
    this.rental_id = rental_id;
  }

  /* GET bookings from the server */
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl)
                    .pipe(
                      catchError(this.handleError<Booking[]>('getBookings'))
                    );
  }

   /* POST booking to bookings list */
  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Booking>('addBooking'))
                    );
  }

  /* DELETE the booking from the server */
  deleteBooking(id: number): Observable<Booking> {
    const deleteUrl = `${this.bookingsUrl}/${id}`;

    return this.http.delete<Booking>(deleteUrl, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Booking>('deleteBooking'))
                    );
  }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
