import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { MaterialExampleModule } from './material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RentalsComponent } from './rentals/rentals.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RentalsSearchComponent } from './rentals-search/rentals-search.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';

import { HighlightDirective } from './directives/highlight.directive';
import { ErrorHandlingDirective } from './directives/error-handling.directive';
import { NrOfPeopleValidationDirective } from './directives/nr-of-people-validation.directive';


@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent,
    RentalsSearchComponent,
    DashboardComponent,
    BookingDialogComponent,
    BookingsComponent,
    HighlightDirective,
    ErrorHandlingDirective,
    NrOfPeopleValidationDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
