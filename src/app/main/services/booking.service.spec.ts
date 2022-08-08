import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
import { Booking } from '../entities/booking';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('BookingService', () => {
  let bookingService: BookingService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'handleError']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });

    bookingService = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(bookingService).toBeTruthy();
  });

  it('should get expected bookings', () => {
    let expectedBookings: Booking[] = [
      { id: 1, rental_id: 2, email: "b98@yahoo.com", nrOfPeople: 5 }
    ];
    
    httpClientSpy.get.and.returnValue(of(expectedBookings));

    bookingService.getBookings().subscribe({
      next: bookings => {
        expect(bookings)
          .withContext('expected bookings')
          .toEqual(expectedBookings);
      }
    });
  });
});
