import { ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdDirective } from '../../directives/ad.directive';
import { AdHolidayComponent } from '../ad-holiday/ad-holiday.component';
import { AdBannerComponent } from './ad-banner.component';

describe('AdBannerComponent', () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBannerComponent, AdDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;

    component.ads = [
      {
      component: AdHolidayComponent,
      data: {
              headline: 'Ad1',
              body: 'Ad body1'
            }
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
