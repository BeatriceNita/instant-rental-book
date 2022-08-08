import { TestBed } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';
import { AdBannerComponent } from '../components/ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';

describe('AdDirective', () => {
  let viewContainerRefSpy: ViewContainerRef;

  beforeEach(async () => {
    viewContainerRefSpy = jasmine.createSpyObj('ViewContainerRef', ['get']);

    await TestBed.configureTestingModule({
      declarations: [ AdBannerComponent, AdDirective ],
      providers: [
        { provide: ViewContainerRef, useValue: viewContainerRefSpy }
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const directive = new AdDirective(viewContainerRefSpy);
    expect(directive).toBeDefined();
  });

});
