import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookingService } from '../services/booking.service';
import { Booking } from '../entities/booking';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
  rental_id!: number;
  nrOfPeople: number = 0;

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    private bookingService: BookingService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log('ngOnInit',this.bookingService.getRentalId());
    this.rental_id = this.bookingService.getRentalId();
  }

  onClose() {
    this.dialogRef.close();
  }

  onAddBooking() {
    let booking = {
          id: 3,
          rental_id: this.rental_id,
          nrOfPeople: this.nrOfPeople
    }

    console.log(this.rental_id);
    this.bookingService.addBooking(booking).subscribe();
    this.dialogRef.close();
  }

}
