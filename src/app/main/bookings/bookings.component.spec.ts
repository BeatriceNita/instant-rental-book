import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';
import { Booking } from '../entities/booking';
import { BookingsComponent } from './bookings.component';
import { BookingService } from '../services/booking.service';

describe('BookingsComponent', () => {
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;

  let bookingService: BookingService;
  let bookingServiceStub: Partial<BookingService>;
  let bookings: Booking [];
  let h3: HTMLElement;

  bookings = [
    { id: 1, rental_id: 1, email: "b98@yahoo.com", nrOfPeople: 5 }
  ]

  beforeEach(async () => {
    bookingServiceStub = {
        getBookings() {
          return of(bookings);
        }
    }

    await TestBed.configureTestingModule({
      declarations: [ BookingsComponent ],
      imports: [ HttpClientModule ],
      providers: [{ provide:BookingService, useValue: bookingServiceStub }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsComponent);
    component = fixture.componentInstance;

    bookingService = TestBed.inject(BookingService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return one booking', () => {
    bookingService.getBookings().subscribe((bookings) => {
      expect(bookings.length).toEqual(1);
    })
  });

  it('should display booking id', () => {
    const compiled = fixture.debugElement.nativeElement;
    const h3 = compiled.querySelector('h3');
    bookingService.getBookings().subscribe((bookings) => {
      expect(h3.textContent).toContain(bookings[0].id);
    })
  });

});
