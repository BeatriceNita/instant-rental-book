import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
//import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RentalsSearchComponent } from './rentals-search/rentals-search.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';

import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    RentalsSearchComponent,
    BookingsComponent,
    BookingDialogComponent,
    HighlightDirective
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
