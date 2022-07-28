import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHolidayComponent } from './ad-holiday.component';

describe('AdHolidayComponent', () => {
  let component: AdHolidayComponent;
  let fixture: ComponentFixture<AdHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHolidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
