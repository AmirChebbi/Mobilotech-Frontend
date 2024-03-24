import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthenticationPageComponent} from "./authentication-page/authentication-page.component";
import {HttpClientModule} from "@angular/common/http";
import * as http from "http";

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
