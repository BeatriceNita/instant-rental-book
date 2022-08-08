import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
import { Booking } from '../entities/booking';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('BookingService', () => {
  let bookingService: BookingService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let expectedBookings: Booking[] = [
    { id: 1, rental_id: 2, email: "b98@yahoo.com", nrOfPeople: 5 }
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });

    bookingService = new BookingService(httpClientSpy);
  });

  it('should be created', () => {
    expect(bookingService).toBeTruthy();
  });

  it('should get expected bookings', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(expectedBookings));

    bookingService.getBookings().subscribe({
      next: bookings => {
        expect(bookings)
          .withContext('expected bookings')
          .toEqual(expectedBookings);
        done();
      },
      error: () => {
        done.fail;
      }
    });

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should add new booking', () => {
    const booking = { id: 2, rental_id: 3, email: "b97@yahoo.com", nrOfPeople: 7 }

    httpClientSpy.post.and.returnValue(of(booking));

    bookingService.addBooking(booking).subscribe({
      next: bookings => {
        expect(bookings)
          .withContext('added new booking')
          .toEqual(booking);
      }
    });

    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });

  it('should delete booking', () => {
    const id = 1;
    
    httpClientSpy.delete.and.returnValue(of(expectedBookings[id]));

    bookingService.deleteBooking(id).subscribe({
      next: booking => {
        expect(booking)
          .withContext('deleted booking')
          .toEqual(expectedBookings[id]);
      }
    });

    expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
  });
});
