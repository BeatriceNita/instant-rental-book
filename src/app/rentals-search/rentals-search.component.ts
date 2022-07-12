import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Rental } from '../entities/rental';
import { RentalService } from '../services/rental.service';

import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-rentals-search',
  templateUrl: './rentals-search.component.html',
  styleUrls: ['./rentals-search.component.css']
})
export class RentalsSearchComponent implements OnInit {
  rentals$!: Observable<Rental[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private rentalService: RentalService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.rentals$ = this.searchTerms.pipe(
          //switch to new search each time the term changes, show results for latest search only
          switchMap((term: string) => this.rentalService.searchRentals(term))
    );
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
        'top': '0',
        left: '0'
    };

    this.dialog.open(BookingDialogComponent);
  }

  search(term: string){
    this.searchTerms.next(term);
  }

}
