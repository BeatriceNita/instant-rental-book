import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Rental } from '../entities/rental';
import { Booking } from '../entities/booking';
import { RentalService } from '../services/rental.service';
import { BookingService } from '../services/booking.service';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-rentals-search',
  templateUrl: './rentals-search.component.html',
  styleUrls: ['./rentals-search.component.css']
})
export class RentalsSearchComponent implements OnInit {
  rentals$!: Observable<Rental[]>;
  color: string = '#6495ED';

  private searchTerms = new Subject<string>();

  constructor(
    public dialog: MatDialog,
    private rentalService: RentalService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.rentals$ = this.searchTerms.pipe(
          //switch to new search each time the term changes, show results for latest search only
          switchMap((term: string) => this.rentalService.searchRentals(term))
    );
  }

  openDialog(rental_id: number, capacity: number): void {
    this.bookingService.setRentalId(rental_id);
    this.bookingService.setCapacity(capacity);
    this.dialog.open(BookingDialogComponent,{
        height: '460px',
        width: '500px',
        disableClose: true,
        hasBackdrop: true
    });
  }

  search(term: string){
    this.searchTerms.next(term);
  }

}
