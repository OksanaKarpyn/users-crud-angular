import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fiscalCodeValidator } from './fiscal-code.validator';
import { phoneNumberValidator } from './phone-mobile.validator';

//custom validator numeric
function numericValidator(control: AbstractControl) {
  const value = control.value;
  if (value && !/^\d+$/.test(value)) {
    return { pattern: true };
  }
  return null;
}
@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent {
  form!: UntypedFormGroup;
  id!: string | null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      surname: ['', Validators.required],
      fiscalCode: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          fiscalCodeValidator()
        ],
      ],
      address: ['', Validators.required],
      cap: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          numericValidator
        ]),
      ],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', phoneNumberValidator()],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13),
          phoneNumberValidator(),
        ],
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password:['',Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditing = true;
      this.usersService.getUser(this.id).subscribe({
        next: (userData) => {
          this.form.patchValue(userData);
        },
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.id) {
      const value = Object.assign({ id: this.id }, this.form.value);
      this.usersService.updateUser(value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error(err.message);
        },
      });
    } else {
      this.usersService.createUser(this.form.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error(err.message);
        },
      });
    }
  }




  get name() {
    return this.form.get('name');
  }
  get surname() {
    return this.form.get('surname');
  }
  get fiscalCode() {
    return this.form.get('fiscalCode');
  }
  get address() {
    return this.form.get('address');
  }
  get cap() {
    return this.form.get('cap');
  }
  get city() {
    return this.form.get('city');
  }
  get country() {
    return this.form.get('country');
  }
  get phone() {
    return this.form.get('phone');
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get email() {
    return this.form.get('email');
  }
}
