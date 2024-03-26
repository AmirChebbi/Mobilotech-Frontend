import { Component } from '@angular/core';
import {LoginPageComponent} from "../login-page/login-page.component";
import {SignupPageComponent} from "../signup-page/signup-page.component";
import {NgIf} from "@angular/common";
import {AuthenticationPageModule} from "./authentication-page.module";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  templateUrl: './authentication-page.component.html',
  imports: [
    NgIf,
    AuthenticationPageModule
  ],
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent {
  login:boolean = true;
}
