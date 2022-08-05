import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDialogComponent } from './booking-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { NrOfPeopleValidationDirective } from 'src/app/shared/validation/directives/nr-of-people-validation.directive';

describe('BookingDialogComponent', () => {
  let component: BookingDialogComponent;
  let fixture: ComponentFixture<BookingDialogComponent>;

  const updateForm = (email: string, nrOfPeople: string) => {
    component.dialogForm.controls['email'].setValue(email);
    component.dialogForm.controls['nrOfPeople'].setValue(nrOfPeople);
  }

  let rental_id: number = 3;
  let capacity: number = 5;

  beforeEach(async () => {
    const bookingServiceSpy = jasmine.createSpyObj<BookingService>(['getRentalId', 'getCapacity']);
    bookingServiceSpy.getRentalId.and.returnValue(rental_id);
    bookingServiceSpy.getCapacity.and.returnValue(capacity);

    await TestBed.configureTestingModule({
      declarations: [ 
        BookingDialogComponent, 
        NrOfPeopleValidationDirective 
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: BookingService, useValue: bookingServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDialogComponent);
    component = fixture.componentInstance;

    component.rental_id = bookingServiceSpy.getRentalId();
    component.capacity = bookingServiceSpy.getCapacity();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form invalid should be true when form is invalid', () => {
    updateForm('', '');
    expect(component.dialogForm.invalid).toBeTruthy();
  });

  it('Form invalid should be true when email is invalid', () => {
    updateForm('beatrice@yahoo', '3');
    expect(component.dialogForm.invalid).toBeTruthy();
  });

  it('Form invalid should be true when nrOfPeople is invalid', () => {
    updateForm('beatrice.nita98@yahoo.com', '30');
    expect(component.dialogForm.invalid).toBeTruthy();
  });
});
