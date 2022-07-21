import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateNrOfPeople(capacity: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value <= capacity ? null : { wrongNrOfPeople: control.value };
}
