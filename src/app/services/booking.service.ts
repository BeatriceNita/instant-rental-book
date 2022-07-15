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

  /* GET bookings from the server */
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl);
  }

   /* POST booking to bookings list */
  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking, this.httpOptions);
  }

  /* DELETE the booking from the server */
  deleteBooking(): Observable<Booking> {
    return this.http.delete<Booking>(this.bookingsUrl, this.httpOptions);
  }
}
