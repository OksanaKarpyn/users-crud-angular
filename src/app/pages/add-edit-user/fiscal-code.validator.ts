import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FiscalCodeValidatorService } from '../../services/fiscal-code-validator.service';


export function fiscalCodeValidator(fiscalCodeValidatorService: FiscalCodeValidatorService): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValid = fiscalCodeValidatorService.validate(value);
    return isValid ? null : { invalidFiscalCode: true };
  };
}
