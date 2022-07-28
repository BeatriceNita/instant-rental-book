import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.get('username')!.value,
                           this.loginForm.get('password')!.value)
                    .subscribe(() => this.router.navigate(['/dashboard']));
  }

}
