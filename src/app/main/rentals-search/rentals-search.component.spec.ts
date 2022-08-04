import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { RentalsSearchComponent } from './rentals-search.component';
import { RentalService } from '../services/rental.service';
import { BookingService } from '../services/booking.service';


describe('RentalsSearchComponent', () => {
  let component: RentalsSearchComponent;
  let fixture: ComponentFixture<RentalsSearchComponent>;

  beforeEach(async () => {
    const rentalServiceSpy = jasmine.createSpyObj<RentalService>(['searchRentals']);
    rentalServiceSpy.searchRentals.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ RentalsSearchComponent ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: RentalService, useValue: rentalServiceSpy },
        { provide: BookingService, useValue: jasmine.createSpyObj(['setRentalId', 'setCapacity']) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read searchBar value', () => {
    let searchBar = fixture.debugElement.query(By.css('input'));
    searchBar.nativeElement.value = 'London';
    searchBar.nativeElement.dispatchEvent(new Event('input'));

    expect(searchBar.nativeElement.value).toContain('London');
  });

});
