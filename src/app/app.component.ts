import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";
import {HomePageComponent} from "./Home/home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, NgOptimizedImage, NavigationComponent, HomePageComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mobilotech-FrontEnd';
}
