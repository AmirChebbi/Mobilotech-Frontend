import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SlideComponent} from "../slide/slide.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, SlideComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
