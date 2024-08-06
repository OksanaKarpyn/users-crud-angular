import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fiscalCodeValidator(): ValidatorFn {
  const cfRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; 
    }
    const isValid = cfRegex.test(value);
    return isValid ? null : { invalidFiscalCode: true };
  };
}
