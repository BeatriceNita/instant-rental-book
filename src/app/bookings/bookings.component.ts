import { Component, OnInit } from '@angular/core';

import { BookingService } from '../services/booking.service';
import { Booking } from '../entities/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings()
        .subscribe((bookings => this.bookings = bookings));
  }
}
