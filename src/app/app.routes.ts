import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthenticationPageComponent} from "./authentication-page/authentication-page.component";

const routes: Routes = [
  {
    path:  '',
    component: HomePageComponent,
    title: "Mobilotech"
  },
  {
    path: 'authentication',
    component: AuthenticationPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export default routes;
