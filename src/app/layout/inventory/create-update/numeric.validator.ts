import { AbstractControl, ValidatorFn } from '@angular/forms';

// Validator function to check if the value is a number
export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValidNumber = !isNaN(control.value) && isFinite(control.value);
    return isValidNumber ? null : { 'notNumber': { value: control.value } };
  };
}
