import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest, } from '../../../core/model/interface/login';
import { LoginResponse } from '../../../core/model/interface/login';
import { AuthService } from '../../authservices/auth-service';
import { LoginService } from '../../../core/services/login-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  ngOnInit(): void {
  }

  constructor() {

  }
  http = inject(HttpClient)
  fb = inject(FormBuilder)
  showPassword = false;
  errorMessage = '';
  loading = false;
  LoginService = inject(LoginService)
  route = inject(Router)
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]

  })

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();
      return;
    }


    const payload: LoginRequest = {
      userName: this.loginForm.get('userName')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    };

    console.log('Payload:', payload);

    this.loading = true;
    this.errorMessage = '';

    this.LoginService.login(payload).subscribe({

      next: (res: LoginResponse) => {
        this.loading = false;

        console.log('login success');
        this.route.navigate(['/dashboard']);
      },

      error: (error) => {
        this.loading = false;
        console.error('login failed');
        this.errorMessage = 'Invalid username or password';


      }


    });



  }



}
