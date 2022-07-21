import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { validateNrOfPeople } from '../validation/nr-of-people-validator';

@Directive({
  selector: '[appNrOfPeopleValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NrOfPeopleValidationDirective,
    multi:true
  }]
})
export class NrOfPeopleValidationDirective implements Validator{
  @Input('appNrOfPeopleValidation') capacity: number = 0;

  validate(control:AbstractControl): ValidationErrors | null {
    return validateNrOfPeople(this.capacity)(control);
  }
}
