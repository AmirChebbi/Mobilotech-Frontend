import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "../login-page/login-page.component";
import {SignupPageComponent} from "../signup-page/signup-page.component";
import {JwtService} from "../jwt.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent
  ],
  providers: [
    JwtService
  ]
})
export class AuthenticationPageModule { }
