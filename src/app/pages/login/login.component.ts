import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { FormBuilder, UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [JsonPipe, CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: UntypedFormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,private authService:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  submit(){
    this.authService.login(this.loginForm.value)
  }
}
