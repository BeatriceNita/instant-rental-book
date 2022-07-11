import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Rental } from '../entities/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rentals-search',
  templateUrl: './rentals-search.component.html',
  styleUrls: ['./rentals-search.component.css']
})
export class RentalsSearchComponent implements OnInit {
  rentals$!: Observable<Rental[]>;
  private searchTerms = new Subject<string>();

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.rentals$ = this.searchTerms.pipe(
          //switch to new search each time the term changes, show results for latest search only
          switchMap((term: string) => this.rentalService.searchRentals(term))
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }

}
