import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdHolidayComponent } from 'src/app/shared/dynamic-ad-banner/components/ad-holiday/ad-holiday.component';
import { AdService } from 'src/app/shared/dynamic-ad-banner/services/ad.service';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let adServiceSpy: jasmine.SpyObj<AdService>;

  let ads = [
      {
        component: AdHolidayComponent,
        data: {
                headline: 'Ad1',
                body: 'Ad body1'
              }
      }
  ];

  beforeEach(async () => {
    adServiceSpy = jasmine.createSpyObj<AdService>('AdService', ['getAds']);
    adServiceSpy.getAds.and.returnValue(ads);

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: AdService, useValue: adServiceSpy }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ads', () => {
    expect(adServiceSpy.getAds).toHaveBeenCalled();
  });

  // it('should have 2 ads', () => {
  //   expect(adServiceSpy.getAds.length).toBe(1);
  // });
});
