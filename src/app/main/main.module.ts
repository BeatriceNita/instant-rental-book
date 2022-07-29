import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    DashboardComponent,
    RentalsSearchComponent,
    BookingsComponent,
    BookingDialogComponent,
    HighlightDirective
  ]
})
export class MainModule { }
