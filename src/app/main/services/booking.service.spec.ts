import { of } from 'rxjs';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
import { Booking } from '../entities/booking';

describe('BookingService', () => {
  let service: BookingService;
  let bookingServiceSpy: jasmine.SpyObj<BookingService>;

  let expectedBookings: Booking[] = [
    { id: 1, rental_id: 1, email: "b98@yahoo.com", nrOfPeople: 5 }
  ]

  beforeEach(() => {
    bookingServiceSpy = jasmine.createSpyObj('BookingService', ['getBookings']);
    bookingServiceSpy.getBookings.and.returnValue(of(expectedBookings));

    TestBed.configureTestingModule({
      providers: [{ provide:BookingService, useValue: bookingServiceSpy }]
    });
    service = TestBed.inject(BookingService);
    bookingServiceSpy = TestBed.inject(BookingService) as jasmine.SpyObj<BookingService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get expected bookings', () => {
    bookingServiceSpy.getBookings().subscribe({
      next: bookings => {
        expect(bookings)
          .withContext('expected bookings')
          .toEqual(expectedBookings);
      }
    });
  });
});
