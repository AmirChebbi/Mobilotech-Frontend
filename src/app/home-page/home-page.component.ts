import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SlideComponent} from "../slide/slide.component";
import {CategoryComponent} from "../category/category.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [RouterModule, SlideComponent, CategoryComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
