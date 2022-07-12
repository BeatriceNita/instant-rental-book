import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Booking } from '../entities/booking';

@Injectable({providedIn: 'root'})
export class BookingService {
  private bookingsUrl = 'api/bookings';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl);
  }

  deleteBooking(): Observable<Booking> {
    return this.http.delete<Booking>(this.bookingsUrl, this.httpOptions);
  }
}
