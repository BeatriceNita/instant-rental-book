import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { BookingService } from '../services/booking.service';
import { Booking } from '../entities/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];
  color: string = '#a9436e';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings()
                       .subscribe((bookings => this.bookings = bookings));
  }

  deleteBooking(id: number): void {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.bookings = this.bookings.filter(booking => id !== booking.id)
    });
  }
}
