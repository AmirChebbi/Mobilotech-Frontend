import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationPageModule} from "./authentication-page/authentication-page.module";

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpClientModule, AuthenticationPageModule],
  declarations: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
