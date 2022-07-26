import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayAdComponent } from './holiday-ad.component';

describe('HolidayAdComponent', () => {
  let component: HolidayAdComponent;
  let fixture: ComponentFixture<HolidayAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
