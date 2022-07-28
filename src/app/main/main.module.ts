import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
//import { DynamicAdBannerModule } from '../dynamic-ad-banner/dynamic-ad-banner.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { RentalsSearchComponent } from './rentals-search/rentals-search.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    ToolbarComponent,
    DashboardComponent,
    RentalsSearchComponent,
    BookingsComponent,
    BookingDialogComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToolbarComponent,
    DashboardComponent,
    RentalsSearchComponent,
    BookingsComponent,
    BookingDialogComponent,
    HighlightDirective
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
