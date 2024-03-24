import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private jwtService:JwtService) {
  }
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })



  login(){
    let loginData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.jwtService.generateToken(JSON.stringify(loginData));
  }
}
