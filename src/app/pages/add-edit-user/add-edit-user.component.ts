import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss',
})
export class AddEditUserComponent {
  form!: UntypedFormGroup;

  constructor(fb: FormBuilder, private usersService: UsersService) {
    this.form = fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      surname: [''],
      fiscalCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ]),
      ],
      address: [''],
      cap: [''],
      city: [''],
      country: [''],
      phone: [''],
      mobile: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  submit() {
    this.usersService.createUser(this.form.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err.message);
      },
    });
  }
}
