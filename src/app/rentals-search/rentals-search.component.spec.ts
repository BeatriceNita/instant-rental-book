import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RentalsSearchComponent } from './rentals-search.component';

describe('RentalsSearchComponent', () => {
  let component: RentalsSearchComponent;
  let fixture: ComponentFixture<RentalsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
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

  it('should read searchBar value', () => {
    let searchBar = fixture.debugElement.query(By.css('#searchBar'));
    searchBar.nativeElement.value = 'London';
    searchBar.nativeElement.dispatchEvent(new Event('input'));

    expect(searchBar.nativeElement.value).toContain('London');
  });
});
