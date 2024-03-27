import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit{

  constructor(private cdr: ChangeDetectorRef, private jwtService: JwtService) {
  }

  signUpForm= new FormGroup({
    firstName:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword:new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.signUpForm.reset(); // supposed to empty the form on page load
  }

  signup(){
    const signUpData ={
      firstName: this.signUpForm.get('firstName')?.value,
      lastName: this.signUpForm.get('lastName')?.value,
      email: this.signUpForm.get('email')?.value,
      phoneNumber: this.signUpForm.get('phoneNumber')?.value,
      password: this.signUpForm.get('password')?.value,
      confirmPassword: this.signUpForm.get('confirmPassword')?.value
    }
    this.jwtService.sendSignUpRequest(JSON.stringify(signUpData))
  }
}
