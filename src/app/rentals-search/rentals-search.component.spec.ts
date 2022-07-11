import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsSearchComponent } from './rentals-search.component';

describe('RentalsSearchComponent', () => {
  let component: RentalsSearchComponent;
  let fixture: ComponentFixture<RentalsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsSearchComponent ]
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
});
