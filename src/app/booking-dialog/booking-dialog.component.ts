import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookingService } from '../services/booking.service';
import { Booking } from '../entities/booking';
import { validation } from '../nr-of-people-validator';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
  rental_id!: number;
  capacity!: number;
  nrOfPeople!: number;
  email!: string;
  dialogForm!: FormGroup;

  public errorHandling = (control: string, error: string) => {
    return this.dialogForm.controls[control].hasError(error);
  }

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.rental_id = this.bookingService.getRentalId();
    this.capacity = this.bookingService.getCapacity();
    this.reactiveForm();
  }

  reactiveForm() {
    this.dialogForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
          nrOfPeople: ['', [Validators.required, validation(this.capacity)]]
    });
  }

  onAddBooking() {
    let booking = {
          id: 3,
          rental_id: this.rental_id,
          email: this.dialogForm.get('email')!.value,
          nrOfPeople: this.dialogForm.get('nrOfPeople')!.value
    }

    this.bookingService.addBooking(booking).subscribe();
    this.dialogRef.close();
  }

  onClose() {
      this.dialogRef.close();
  }
}
