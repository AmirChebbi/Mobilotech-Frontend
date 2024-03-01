import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgOptimizedImage, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mobilotech-FrontEnd';
}
