import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

import { AdDirective, AdBannerComponent, AdHolidayComponent } from './dynamic-ad-banner/';
import { ErrorHandlingDirective } from './validation/directives/error-handling.directive';
import { NrOfPeopleValidationDirective } from './validation/directives/nr-of-people-validation.directive';

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
