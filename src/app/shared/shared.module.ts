import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

import { ErrorHandlingDirective } from './validation/directives/error-handling.directive';
import { NrOfPeopleValidationDirective } from './validation/directives/nr-of-people-validation.directive';
import { AdDirective } from './dynamic-ad-banner/directives/ad.directive';
import { AdBannerComponent } from './dynamic-ad-banner/components/ad-banner/ad-banner.component';
import { AdHolidayComponent } from './dynamic-ad-banner/components/ad-holiday/ad-holiday.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdDirective,
    AdBannerComponent,
    AdHolidayComponent,
    ErrorHandlingDirective,
    NrOfPeopleValidationDirective
  ],
  exports: [
    AdDirective,
    AdBannerComponent,
    AdHolidayComponent,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorHandlingDirective,
    NrOfPeopleValidationDirective
  ]
})
export class SharedModule { }
