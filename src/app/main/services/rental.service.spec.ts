import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RentalService } from './rental.service';

describe('RentalService', () => {
  let service: RentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(RentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
