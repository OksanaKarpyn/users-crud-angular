import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe,CommonModule],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss',
})
export class AddEditUserComponent {
  form!: UntypedFormGroup;

  id!: string | null;
  isEditing: boolean = false;
  constructor(
    fb: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      surname: ['',Validators.required],
      fiscalCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ]),
      ],
      address: ['',Validators.required],
      cap: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])],
      city: ['',Validators.required],
      country: ['',Validators.required],
      phone: [''],
      mobile: ['',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
        
      )],
      email: ['', 
        Validators.compose([
          Validators.required, 
          Validators.email
        ])],
    });

    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditing = true;
      usersService.getUser(this.id).subscribe({
        next: (userData) => {
          this.form.patchValue(userData);
        },
      });
    }
  }

  submit() {
    if (this.id) {
      const value = Object.assign({ id: this.id }, this.form.value);
      this.usersService.updateUser(value).subscribe({
        next: (data) => {
          console.log(data);
        },
        
        error: (err) => {
          console.error(err.message);
        },
      });
    } else {
      this.isEditing = false;
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
  get name() { return this.form.get('name'); }
  get surname() { return this.form.get('surname'); }
  get fiscalCode() { return this.form.get('fiscalCode'


  ); }
}
