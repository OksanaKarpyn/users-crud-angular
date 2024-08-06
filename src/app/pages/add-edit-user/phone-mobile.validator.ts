import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  const phoneRegex = /^[0-9+]*$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Don't validate empty value
    }
    const isValid = phoneRegex.test(value);
    return isValid ? null : { invalidPhoneNumber: true };
  };
}
