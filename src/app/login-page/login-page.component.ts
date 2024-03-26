import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  constructor(private cdr: ChangeDetectorRef, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    this.loginForm.reset(); // supposed to empty the form on page load
    this.login();
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });



  login(){
    const loginData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.jwtService.generateToken(JSON.stringify(loginData));
  }
}
