import { FormGroup } from '@angular/forms';

export function errorHandling(dialogForm: FormGroup, control: string, error: string) {
  return dialogForm.controls[control].hasError(error);
}
