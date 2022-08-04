import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';
import { AdBannerComponent } from '../components/ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';

describe('AdDirective', () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;
  let viewContainerRefSpy: ViewContainerRef;

  let data = {
    headline: 'Headline 1',
    body: 'Body 1'
  }

  beforeEach(async () => {
    viewContainerRefSpy = jasmine.createSpyObj('ViewContainerRef', ['insert', 'createComponent'], { 'instance': data} );
    //viewContainerRefSpy.instance.and.returnValue(data);

    await TestBed.configureTestingModule({
      declarations: [ AdBannerComponent, AdDirective ],
      providers: [
        { provide: ViewContainerRef, useValue: viewContainerRefSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdBannerComponent);
    fixture.detectChanges();

    //des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

  });

  // it('should create', () => {
  //     expect(viewContainerRefSpy.instance).toBeDefined();
  // });

});
