import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { errorHandling } from '../validation/error-handling';

@Directive({
  selector: '[appErrorHandling]'
})
export class ErrorHandlingDirective {
  @Input('appErrorHandling') dialogForm!: FormGroup;
  @Input('control') control: string = '';
  @Input('error') error: string = '';

  errorHandling() {
    return errorHandling(this.dialogForm, this.control, this.error);
  }
}
