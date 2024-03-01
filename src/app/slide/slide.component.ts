import { Component } from '@angular/core';
import {ProductDivisionComponent} from "../product-division/product-division.component";

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    ProductDivisionComponent
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {

}
